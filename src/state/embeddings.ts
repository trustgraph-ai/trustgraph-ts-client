import { useQuery } from "@tanstack/react-query";

import { useSocket, useConnectionState } from "../api/trustgraph/socket";
import { useNotification } from "./notify";
import { useActivity } from "./activity";

/**
 * Custom hook for generating embeddings from text using AI models
 * Provides functionality for computing vector embeddings for semantic search
 * @param params - Configuration object
 * @param params.flow - Optional flow ID to use (defaults to "default")
 * @param params.term - Text content to generate embeddings for
 * @returns Embeddings state and operations
 * @public
 */
export const useEmbeddings = ({ flow, term }: { flow?: string; term: string }) => {
  // WebSocket connection for communicating with the configuration service
  const socket = useSocket();
  const connectionState = useConnectionState();

  // Only enable queries when socket is connected and ready
  const isSocketReady =
    connectionState?.status === "authenticated" ||
    connectionState?.status === "unauthenticated";

  // Hook for displaying user notifications
  const notify = useNotification();

  if (!flow) flow = "default";

  /**
   * Query for generating text embeddings
   * Uses React Query for caching and background refetching
   */
  const query = useQuery({
    queryKey: ["embeddings", { flow, term }],
    enabled: isSocketReady && !!term && !!flow,
    queryFn: () => {
      return socket
        .flow(flow)
        .embeddings(term)
        .then((x: any) => {
          if (x && x["error"]) {
            console.log("Error:", x);
            throw x.error.message;
          }
          return x;
        })
        .catch((err) => {
          console.log("Error:", err);
          notify.error(err);
        });
    },
  });

  // Show loading indicators for long-running operations
  useActivity(query.isLoading, "Compute embeddings");

  // Return embeddings state and operations for use in components
  return {
    /** Generated embeddings vector data */
    embeddings: query.data,
    /** Whether embeddings are being generated */
    isLoading: query.isLoading,
    /** Whether an error occurred */
    isError: query.isError,
    /** Error details if generation failed */
    error: query.error,

    /** Manual refetch function */
    refetch: query.refetch,
  };
};
