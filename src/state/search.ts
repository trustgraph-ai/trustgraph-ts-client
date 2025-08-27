import { create } from "zustand";
import { Row } from "../utils/row";

/**
 * Search state interface for managing search functionality
 * @public
 */
export interface SearchState {
  /** Array of Row objects representing search results or filtered data */
  rows: Row[];

  /** Function to update the entire rows array (replaces all results) */
  setRows: (v: Row[]) => void;

  /** Current search input/query string from user */
  input: string;

  /** Function to update the search input value */
  setInput: (v: string) => void;
}

/**
 * Zustand store for managing search functionality state
 * Provides search input tracking and result management
 * @public
 */
export const useSearchStateStore = create<SearchState>()((set) => ({
  rows: [],
  input: "",

  setRows: (v) =>
    set(() => ({
      rows: v,
    })),

  setInput: (v) =>
    set(() => ({
      input: v,
    })),
}));
