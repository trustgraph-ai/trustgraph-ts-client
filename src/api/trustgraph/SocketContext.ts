import { createTrustGraphSocket } from "./trustgraph-socket";
import { createContext } from "react";

/**
 * Default socket instance for the React context
 * @internal
 */
const socket = createTrustGraphSocket();

/**
 * React context for providing TrustGraph socket instance throughout the component tree
 * @public
 */
export const SocketContext = createContext(socket);
