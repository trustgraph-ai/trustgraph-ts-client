import { useQueryClient } from "@tanstack/react-query";

import { useSocket } from "../api/trustgraph/socket";
import { useNotification } from "./notify";
import { vectorSearch } from "../utils/vector-search";
import { useProgressStateStore } from "./progress";

/**
 * Custom hook for performing vector-based semantic search
 * Provides functionality for searching knowledge graph entities using embeddings
 * @returns Vector search operations
 * @public
 */
export const useVectorSearch = () => {
  // WebSocket connection for communicating with the graph service
  const socket = useSocket();

  const addActivity = useProgressStateStore((state) => state.addActivity);

  const removeActivity = useProgressStateStore(
    (state) => state.removeActivity,
  );

  // Hook for displaying user notifications
  const notify = useNotification();

  const queryClient = useQueryClient();

  /**
   * Execute a vector search query
   * @param params - Search parameters
   * @param params.flow - Flow ID to use for the search
   * @param params.term - Search term to find similar entities for
   * @param params.limit - Maximum number of results to return
   * @returns Promise resolving to search results
   */
  const query = ({ flow, term, limit }: { flow: string; term: string; limit: number }) => {
    if (!term) return;

    if (!flow) flow = "default";
    if (!limit) limit = 10;

    /**
     * Fetch embeddings and perform vector search
     * Uses React Query for caching and background refetching
     */

    return queryClient.fetchQuery({
      queryKey: ["search", { flow, term, limit }],
      queryFn: () => {
        return vectorSearch(socket, flow, addActivity, removeActivity, term)
          .then((x: any) => {
            if (x && x["error"]) {
              console.log("Error:", x);
              throw x.error.message;
            }
            return x;
          })
          .catch((err: any) => {
            console.log("Error:", err);
            notify.error(err);
          });
      },
    });
  };

  // Not show loading indicators, it's handled above

  // Return vector search functionality
  return {
    /** Execute a vector search query */
    query: query,
  };
};
