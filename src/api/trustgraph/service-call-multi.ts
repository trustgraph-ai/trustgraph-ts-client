import type { RequestMessage } from './messages';
import type { BaseApi } from './trustgraph-socket';

/**
 * Delay before attempting to reconnect a WebSocket (2 seconds)
 * @public
 */
export const SOCKET_RECONNECTION_TIMEOUT = 2000;

/**
 * ServiceCallMulti handles service calls that expect multiple responses
 * Unlike ServiceCall, this class can handle streaming responses or multiple
 * response messages for a single request
 * @public
 */
export class ServiceCallMulti {
  /** Message ID - unique identifier for this request */
  mid: string;
  /** The actual message/request to send */
  msg: RequestMessage;
  /** Callback function called on successful completion */
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
  /** Function to process responses and determine if call is complete */
  receiver: (response: any) => boolean;
  /** Timer for retry attempts */
  timer: NodeJS.Timeout | undefined;
  /** Whether this request has completed */
  complete: boolean = false;
  /** Timer ID for timeout handling */
  timeoutId: NodeJS.Timeout | undefined;

  /**
   * Create a new ServiceCallMulti instance for handling multiple responses
   * @param mid - Message ID - unique identifier for this request
   * @param msg - The actual message/request to send
   * @param success - Callback function called on successful completion
   * @param error - Callback function called on error/failure
   * @param timeout - Timeout duration in milliseconds
   * @param retries - Number of retry attempts allowed
   * @param socket - Socket instance to send the message through
   * @param receiver - Function to process responses; returns true when complete
   */
  constructor(
    mid: string,
    msg: RequestMessage,
    success: (resp: any) => void,
    error: (err: any) => void,
    timeout: number,
    retries: number,
    socket: BaseApi,
    receiver: (response: any) => boolean,
  ) {
    this.mid = mid;
    this.msg = msg;
    this.success = success;
    this.error = error;
    this.timeout = timeout;
    this.retries = retries;
    this.socket = socket;
    this.completed = false;
    this.receiver = receiver;
  }

  /**
   * Calculate exponential backoff delay for retry attempts
   * @returns Delay in milliseconds (capped at 10 seconds)
   */
  calculateBackoff(): number {
    return Math.min(1000 * Math.pow(2, 3 - this.retries), 10000);
  }

  /**
   * Start the multi-response service call
   * Registers the call and begins the first attempt
   */
  start() {
    this.socket.inflight[this.mid] = this;
    this.attempt();
  }

  /**
   * Handle received responses, potentially multiple for one request
   * @param resp - Response object from the server
   */
  onReceived(resp: object) {
    if (this.complete == true)
      console.log(this.mid, "should not happen, request is already complete");

    const fin = this.receiver(resp);

    if (fin) {
      this.complete = true;
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
      delete this.socket.inflight[this.mid];
      this.success(resp);
    }
  }

  /**
   * Handle request timeout by retrying if attempts remain
   */
  onTimeout() {
    if (this.complete == true)
      console.log(
        this.mid,
        "timeout should not happen, request is already complete",
      );

    console.log("Request", this.mid, "timed out");
    clearTimeout(this.timeoutId);
    this.attempt();
  }

  /**
   * Attempt to send the request with retry and reconnection logic
   */
  attempt() {
    if (this.complete == true)
      console.log(
        this.mid,
        "attempt should not be called, request is already complete",
      );

    this.retries--;

    if (this.retries < 0) {
      console.log("Request", this.mid, "ran out of retries");

      clearTimeout(this.timeoutId);
      delete this.socket.inflight[this.mid];

      this.error("Ran out of retries");
      return; // Exit early - no more attempts
    }

    // Check if WebSocket connection is available and ready
    if (this.socket.ws && this.socket.ws.readyState === WebSocket.OPEN) {
      try {
        this.socket.ws.send(JSON.stringify(this.msg));
        this.timeoutId = setTimeout(this.onTimeout.bind(this), this.timeout);

        return;
      } catch (e) {
        console.log("Error:", e);
        console.log("Message send failure, retry...");

        // Calculate backoff delay with jitter
        const backoffDelay = Math.min(
          SOCKET_RECONNECTION_TIMEOUT * Math.pow(2, 3 - this.retries) +
            Math.random() * 1000,
          30000, // Max 30 seconds
        );

        this.timeoutId = setTimeout(this.attempt.bind(this), backoffDelay);

        console.log("Reopen...");
        // Attempt to reopen the WebSocket connection
        this.socket.reopen();
      }
    } else {
      // No WebSocket connection available or not ready
      // Check if socket is connecting
      if (
        this.socket.ws &&
        this.socket.ws.readyState === WebSocket.CONNECTING
      ) {
        // Wait a bit longer for connection to establish
        setTimeout(this.attempt.bind(this), 500);
      } else {
        // Socket is closed or closing, trigger reopen
        console.log("Socket not ready, reopening...");
        this.socket.reopen();

        // Calculate backoff delay
        const backoffDelay = Math.min(
          SOCKET_RECONNECTION_TIMEOUT * Math.pow(2, 3 - this.retries) +
            Math.random() * 1000,
          30000,
        );

        setTimeout(this.attempt.bind(this), backoffDelay);
      }
    }
  }
}
