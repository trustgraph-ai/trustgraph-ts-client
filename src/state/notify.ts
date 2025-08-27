// TODO: Replace with event-based notification system
// import { toaster } from "../components/ui/toaster";

/**
 * Custom hook for displaying toast notifications to users
 * Provides a consistent interface for showing success, error, and info
 * messages
 * @returns {Object} Notification methods for different message types
 */
export const useNotification = () => {
  // Temporary console-based implementation
  const notify = (type: string, title: string) => {
    console.log(`[${type.toUpperCase()}]: ${title}`);
    // TODO: Emit event for consumer to handle
  };

  return {
    /**
     * Display a success notification
     * @param {string} title - The success message to display
     */
    success: (title: string) => {
      notify('success', title);
    },

    /**
     * Display an error notification
     * Automatically prefixes the message with "Error: "
     * @param {string} error - The error message to display
     */
    error: (error) => {
      toaster.create({
        title: "Error: " + error,
        type: "error",
      });
    },

    /**
     * Display an error notification
     * Automatically prefixes the message with "Error: "
     * @param {string} error - The error message to display
     */
    warning: (warning) => {
      toaster.create({
        title: "Warning: " + warning,
        type: "warning",
      });
    },

    /**
     * Display an informational notification
     * @param {string} info - The informational message to display
     */
    info: (info) => {
      toaster.create({
        title: info,
        type: "info",
      });
    },
  };
};
