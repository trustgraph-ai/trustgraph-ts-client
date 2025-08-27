import { create } from "zustand";

/**
 * Progress state interface for tracking activities and errors
 * @public
 */
export interface ProgressState {
  /** Set of active activity identifiers - using Set for O(1) lookups and automatic deduplication */
  activity: Set<string>;

  /** Current error message, empty string when no error */
  error: string;

  /** Add a new activity to the tracking set */
  addActivity: (act: string) => void;

  /** Remove an activity from the tracking set */
  removeActivity: (act: string) => void;

  /** Set/update the current error message */
  setError: (error: string) => void;
}

/**
 * Zustand store for managing progress/loading states and errors across the application
 * Uses Set for efficient activity tracking and provides error state management
 * @public
 */
export const useProgressStateStore = create<ProgressState>()((set) => ({
  activity: new Set<string>([]),
  error: "",

  addActivity: (act) =>
    set((state) => {
      const n = new Set(state.activity);
      n.add(act);
      return {
        ...state,
        activity: n,
      };
    }),

  removeActivity: (act) =>
    set((state) => {
      const n = new Set(state.activity);
      n.delete(act);
      return {
        ...state,
        activity: n,
      };
    }),

  setError: (error) =>
    set((state) => {
      return {
        ...state,
        error: error,
      };
    }),
}));
