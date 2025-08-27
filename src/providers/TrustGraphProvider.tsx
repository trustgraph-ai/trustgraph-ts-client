import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SocketProvider } from '../api/trustgraph/SocketProvider';
import type { SocketConfig } from '../types';

/**
 * Configuration options for the TrustGraph client
 */
export interface TrustGraphConfig {
  /**
   * Socket configuration for WebSocket connection
   */
  socket?: SocketConfig;
  
  /**
   * Custom QueryClient instance for TanStack Query
   * If not provided, a default client will be created
   */
  queryClient?: QueryClient;
  
  /**
   * Enable development mode features
   * - Additional logging
   * - Development-only validations
   */
  devMode?: boolean;
}

/**
 * Props for the TrustGraphProvider component
 */
export interface TrustGraphProviderProps {
  children: React.ReactNode;
  config?: TrustGraphConfig;
}

/**
 * Main provider component that sets up all necessary context for TrustGraph client
 * 
 * This provider combines:
 * - TanStack Query for server state management
 * - Socket provider for WebSocket connections
 * - Configuration context for client settings
 * 
 * @example
 * ```tsx
 * import { TrustGraphProvider } from '@trustgraph/client'
 * 
 * function App() {
 *   return (
 *     <TrustGraphProvider config={{
 *       socket: { url: 'wss://api.example.com' },
 *       devMode: true
 *     }}>
 *       <YourApp />
 *     </TrustGraphProvider>
 *   )
 * }
 * ```
 */
export const TrustGraphProvider: React.FC<TrustGraphProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  // Create default QueryClient if none provided
  const queryClient = React.useMemo(() => {
    if (config.queryClient) {
      return config.queryClient;
    }

    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 5 * 60 * 1000, // 5 minutes
          retry: (failureCount, error: any) => {
            // Don't retry on 4xx errors (client errors)
            if (error?.status >= 400 && error?.status < 500) {
              return false;
            }
            // Retry up to 3 times for other errors
            return failureCount < 3;
          },
        },
        mutations: {
          retry: false, // Don't retry mutations by default
        },
      },
    });
  }, [config.queryClient]);

  // Development mode logging
  React.useEffect(() => {
    if (config.devMode) {
      console.log('[TrustGraph] Provider initialized with config:', {
        socket: config.socket ? 'configured' : 'default',
        queryClient: config.queryClient ? 'custom' : 'default',
        devMode: true,
      });
    }
  }, [config]);

  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        {children}
      </SocketProvider>
    </QueryClientProvider>
  );
};

/**
 * Hook to access TrustGraph configuration
 * This is a placeholder for future configuration context
 */
export const useTrustGraphConfig = (): TrustGraphConfig => {
  // For now, return empty config
  // In the future, this could be enhanced to provide access to the configuration context
  return {};
};