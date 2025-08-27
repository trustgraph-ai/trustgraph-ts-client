import { createColumnHelper } from "@tanstack/react-table";
import type { TableRenderers } from "../types";

/**
 * Knowledge core data structure for the knowledge core table
 * Represents a single knowledge core with its metadata and properties
 */
export type KnowledgeCore = {
  id: string; // Unique identifier for the knowledge core
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<KnowledgeCore>();

/**
 * Helper function to determine the selection state of the table header checkbox
 */
const selectionState = (table: any) => {
  if (table.getIsAllRowsSelected()) return true;
  if (table.getIsSomeRowsSelected()) return "indeterminate";
  return false;
};

/**
 * Column definitions for the knowledge core table
 * Returns UI-agnostic column definitions with optional checkbox renderer
 */
export const knowledgeCoreColumns = (renderers?: TableRenderers) => [
  // Selection column - provides row selection functionality with checkboxes
  columnHelper.display({
    id: "select",
    header: ({ table }) => {
      const state = selectionState(table);
      const handler = table.getToggleAllRowsSelectedHandler();
      
      if (renderers?.checkbox) {
        return renderers.checkbox(
          state === true,
          handler,
          state === "indeterminate" ? "indeterminate" : undefined
        );
      }
      
      // Fallback to text indicator
      return state === true ? "☑" : state === "indeterminate" ? "☐" : "☐";
    },
    cell: ({ row }) => {
      const isSelected = row.getIsSelected();
      const handler = row.getToggleSelectedHandler();
      
      if (renderers?.checkbox) {
        return renderers.checkbox(isSelected, handler);
      }
      
      // Fallback to text indicator
      return isSelected ? "☑" : "☐";
    },
  }),

  // ID column - displays the knowledge core ID
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),
];