import { create } from 'zustand';
import type { NotificationConfig } from '../types';

/**
 * Notification event listener type
 */
type NotificationListener = (notification: NotificationConfig) => void;

/**
 * Global notification event manager
 * Provides a centralized system for emitting and listening to notifications
 */
class NotificationEventManager {
  private listeners: Set<NotificationListener> = new Set();

  /**
   * Subscribe to notification events
   * @param listener - Function to call when notifications are emitted
   * @returns Unsubscribe function
   */
  subscribe(listener: NotificationListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Emit a notification event to all subscribers
   * @param notification - The notification to emit
   */
  emit(notification: NotificationConfig): void {
    this.listeners.forEach(listener => {
      try {
        listener(notification);
      } catch (error) {
        console.error('Notification listener error:', error);
      }
    });
  }

  /**
   * Get the current number of active listeners
   */
  getListenerCount(): number {
    return this.listeners.size;
  }
}

// Global singleton instance
const notificationManager = new NotificationEventManager();

/**
 * Notification store for managing notification history and state
 */
interface NotificationStore {
  notifications: NotificationConfig[];
  addNotification: (notification: NotificationConfig) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
  getRecent: (limit?: number) => NotificationConfig[];
}

const useNotificationStore = create<NotificationStore>((set, get) => ({
  notifications: [],

  addNotification: (notification: NotificationConfig) => {
    const id = notification.id || `notification-${Date.now()}-${Math.random()}`;
    const notificationWithId = { ...notification, id };
    
    set(state => ({
      notifications: [...state.notifications, notificationWithId]
    }));

    // Auto-remove after duration (default 5 seconds)
    const duration = notification.duration || 5000;
    if (duration > 0) {
      setTimeout(() => {
        get().removeNotification(id);
      }, duration);
    }
  },

  removeNotification: (id: string) => {
    set(state => ({
      notifications: state.notifications.filter(n => n.id !== id)
    }));
  },

  clearAll: () => {
    set({ notifications: [] });
  },

  getRecent: (limit = 10) => {
    const notifications = get().notifications;
    return notifications.slice(-limit);
  },
}));

/**
 * Hook for managing notifications in a UI-agnostic way
 * Provides methods to emit notifications and manage notification state
 */
export const useNotification = () => {
  const { addNotification, removeNotification, clearAll, getRecent } = useNotificationStore();

  const notify = (type: NotificationConfig['type'], message: string, options?: Partial<NotificationConfig>) => {
    const notification: NotificationConfig = {
      type,
      message,
      duration: 5000,
      ...options,
    };

    // Add to store for history tracking
    addNotification(notification);

    // Emit event for subscribers (UI handlers)
    notificationManager.emit(notification);
  };

  return {
    /**
     * Display a success notification
     * @param message - The success message to display
     * @param options - Optional configuration
     */
    success: (message: string, options?: Partial<NotificationConfig>) => {
      notify('success', message, options);
    },

    /**
     * Display an error notification
     * @param message - The error message to display
     * @param options - Optional configuration
     */
    error: (message: string, options?: Partial<NotificationConfig>) => {
      notify('error', message, options);
    },

    /**
     * Display a warning notification
     * @param message - The warning message to display
     * @param options - Optional configuration
     */
    warning: (message: string, options?: Partial<NotificationConfig>) => {
      notify('warning', message, options);
    },

    /**
     * Display an informational notification
     * @param message - The info message to display
     * @param options - Optional configuration
     */
    info: (message: string, options?: Partial<NotificationConfig>) => {
      notify('info', message, options);
    },

    /**
     * Remove a specific notification by ID
     * @param id - The notification ID to remove
     */
    dismiss: (id: string) => {
      removeNotification(id);
    },

    /**
     * Clear all notifications
     */
    clearAll,

    /**
     * Get recent notifications for display
     * @param limit - Maximum number of notifications to return
     */
    getRecent,
  };
};

/**
 * Hook for subscribing to notification events
 * Use this in your UI components to handle notification display
 */
export const useNotificationSubscription = (listener: NotificationListener) => {
  const { useEffect } = require('react');

  useEffect(() => {
    const unsubscribe = notificationManager.subscribe(listener);
    return unsubscribe;
  }, [listener]);
};

/**
 * Utility hook to get notification history and state
 * Useful for building notification centers or debugging
 */
export const useNotificationState = () => {
  const notifications = useNotificationStore(state => state.notifications);
  const listenerCount = notificationManager.getListenerCount();

  return {
    notifications,
    listenerCount,
    hasActiveListeners: listenerCount > 0,
  };
};

// Export the manager for advanced use cases
export { notificationManager };
