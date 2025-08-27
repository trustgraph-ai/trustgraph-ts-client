import { create } from "zustand";

// Interface defining the shape of the session state store
export interface SessionState {
  // Current flow identifier
  flowId: string;
  
  // Current flow name/type (string)
  flow: string;

  // Description of the current flow
  flowDescription: string;

  // Function to update the flow identifier
  setFlowId: (v: string) => void;

  // Function to update the current flow
  setFlow: (v: string) => void;
}

// Zustand store for managing session/workflow state
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
