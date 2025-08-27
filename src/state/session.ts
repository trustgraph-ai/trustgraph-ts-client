import { create } from "zustand";

/**
 * Session state interface for managing workflow context
 * @public
 */
export interface SessionState {
  /** Current flow identifier */
  flowId: string;
  
  /** Current flow name/type */
  flow: string;

  /** Description of the current flow */
  flowDescription: string;

  /** Update the flow identifier */
  setFlowId: (v: string) => void;

  /** Update the current flow */
  setFlow: (v: string) => void;
}

/**
 * Zustand store for managing session/workflow state
 * Tracks the current flow context and provides methods for updates
 * @public
 */
export const useSessionStore = create<SessionState>()((set) => ({
  flowId: "default",
  flow: "",
  flowDescription: "",

  setFlowId: (v: string) =>
    set(() => ({
      flowId: v,
    })),

  setFlow: (v: string) =>
    set(() => ({
      flow: v,
    })),
}));
