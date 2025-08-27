import { create } from "zustand";
import { Entity } from "./entity";

/**
 * State interface for the main workbench/workspace application
 * Manages the current tool selection, entity selection, and available entities
 * @public
 */
export interface WorkbenchState {
  /** Currently selected entity in the knowledge graph */
  selected?: Entity;
  /** Currently active tool/page (e.g., "chat", "graph", "search") */
  tool: string;
  /** List of all available entities in the current context */
  entities: Entity[];

  /** Select a specific entity */
  setSelected: (e: Entity) => void;
  /** Clear the current entity selection */
  unsetSelected: () => void;
  /** Switch to a different tool/page */
  setTool: (v: string) => void;
  /** Update the available entities list */
  setEntities: (ents: Entity[]) => void;
}

/**
 * Zustand store for managing the main workbench application state
 * Provides centralized state management for tool navigation and entity selection
 * @public
 */
export const useWorkbenchStateStore = create<WorkbenchState>()((set) => ({
  selected: undefined,
  tool: "chat",
  entities: [],

  setSelected: (e: Entity) =>
    set(() => ({
      selected: e,
    })),

  unsetSelected: () =>
    set(() => ({
      selected: undefined,
    })),

  setTool: (v) =>
    set(() => ({
      tool: v,
    })),

  setEntities: (v) =>
    set(() => ({
      entities: v,
    })),
}));
