import type { RequestMessage } from './messages';
import type { BaseApi } from './trustgraph-socket';

/**
 * Delay before attempting to reconnect a WebSocket (2 seconds)
 * @public
 */
export const SOCKET_RECONNECTION_TIMEOUT = 2000;

/**
 * ServiceCall represents a single request/response cycle over a WebSocket
 * connection with built-in retry logic, timeout handling, and completion
 * tracking.
 *
 * This class manages the lifecycle of a service call including:
 * - Sending the initial request
 * - Handling timeouts and retries
 * - Managing completion state
 * - Cleaning up resources
 */
export class ServiceCall {
  /** Message ID - unique identifier for this request */
  mid: string;
  /** The actual message/request to send */
  msg: RequestMessage;
  /** Callback function called on successful response */
  success: (resp: any) => void;
  /** Callback function called on error/failure */
  error: (err: any) => void;
  /** Timeout duration in milliseconds */
  timeout: number;
  /** Number of retry attempts remaining */
  retries: number;
  /** Socket instance to send the message through */
  socket: BaseApi;
  /** Track if this request has completed (deprecated) */
  completed: boolean = false;
  /** Timer for retry attempts */
  timer: NodeJS.Timeout | undefined;
  /** Whether this request has completed */
  complete: boolean = false;
  /** Timer ID for timeout handling */
  timeoutId: NodeJS.Timeout | undefined;

  /**
   * Create a new ServiceCall instance
   * @param mid - Message ID - unique identifier for this request
   * @param msg - The actual message/request to send
   * @param success - Callback function called on successful response
   * @param error - Callback function called on error/failure
   * @param timeout - Timeout duration in milliseconds
   * @param retries - Number of retry attempts allowed
   * @param socket - Socket instance to send the message through
   */
  constructor(
    mid: string,
    msg: RequestMessage,
    success: (resp: any) => void,
    error: (err: any) => void,
    timeout: number,
    retries: number,
    socket: BaseApi,
  ) {
    this.mid = mid;
    this.msg = msg;
    this.success = success;
    this.error = error;
    this.timeout = timeout;
    this.retries = retries;
    this.socket = socket;
    this.completed = false; // Track if this request has completed
  }

  /**
   * Calculate exponential backoff delay for retry attempts
   * @returns Delay in milliseconds (capped at 10 seconds)
   */
  calculateBackoff(): number {
    return Math.min(1000 * Math.pow(2, 3 - this.retries), 10000);
  }

  /**
   * Initiates the service call by registering it with the socket's inflight
   * requests and making the first attempt to send the message
   */
  start() {
    // Register this request as "in-flight" so responses can be matched to it
    this.socket.inflight[this.mid] = this;
    // Make the first attempt to send the message
    this.attempt();
  }

  /**
   * Called when a response is received for this request
   * Handles cleanup and calls the success callback
   *
   * @param resp - The response object received from the server
   */
  onReceived(resp: object) {
    // Defensive check - this shouldn't happen but log if it does
    if (this.complete == true)
      console.log(this.mid, "should not happen, request is already complete");

    // Mark as complete to prevent duplicate processing
    this.complete = true;

    // Clean up timeout timer
    clearTimeout(this.timeoutId);
    this.timeoutId = undefined;

    // Remove from inflight requests tracker
    delete this.socket.inflight[this.mid];

    // Call success callback with the response
    this.success(resp);
  }

  /**
   * Called when the request times out
   * Triggers another attempt if retries are available
   */
  onTimeout() {
    // Defensive check - this shouldn't happen but log if it does
    if (this.complete == true)
      console.log(
        this.mid,
        "timeout should not happen, request is already complete",
      );

    console.log("Request", this.mid, "timed out");

    // Clear the current timeout
    clearTimeout(this.timeoutId);

    // Try again (this will check retry count)
    this.attempt();
  }


  /**
   * Core retry logic - attempts to send the message over the WebSocket
   * Handles retries and waits for BaseApi to handle reconnection
   */
  attempt() {
    // Defensive check - this shouldn't be called on completed requests
    if (this.complete == true)
      console.log(
        this.mid,
        "attempt should not be called, request is already complete",
      );

    // Decrement retry counter
    this.retries--;

    // Check if we've exhausted all retries
    if (this.retries < 0) {
      console.log("Request", this.mid, "ran out of retries");

      // Clean up and call error callback
      clearTimeout(this.timeoutId);
      delete this.socket.inflight[this.mid];
      this.error("Ran out of retries");
      return; // Exit early - no more attempts
    }

    // Check if WebSocket connection is available and ready
    if (this.socket.ws && this.socket.ws.readyState === WebSocket.OPEN) {
      try {
        // Attempt to send the message as JSON
        this.socket.ws.send(JSON.stringify(this.msg));

        // Set up timeout for this attempt
        this.timeoutId = setTimeout(this.onTimeout.bind(this), this.timeout);

        return; // Success - message sent, waiting for response or timeout
      } catch (e) {
        // Handle send failure - wait for BaseApi to handle reconnection
        console.log("Error:", e);
        console.log(
          "Message send failure, waiting for socket reconnection...",
        );

        // Schedule retry with backoff - let BaseApi handle the reconnection
        this.timeoutId = setTimeout(
          this.attempt.bind(this),
          this.calculateBackoff(),
        );
      }
    } else {
      // No WebSocket connection available or not ready
      // Let BaseApi handle reconnection, just wait and retry
      console.log("Request", this.mid, "waiting for socket reconnection...");

      // Use consistent backoff for all waiting scenarios
      setTimeout(this.attempt.bind(this), this.calculateBackoff());
    }
  }
}
