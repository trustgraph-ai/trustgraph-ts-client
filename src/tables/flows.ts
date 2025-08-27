import { createColumnHelper } from "@tanstack/react-table";
import type { TableRenderers } from "../types";

/**
 * Flow data structure for the flow table
 * Represents a single flow with its metadata and properties
 */
export type Flow = {
  id: string; // Unique identifier for the flow
  flowClass: string; // Flow class ID
  description: string; // Human-readable description
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<Flow>();

/**
 * Helper function to determine the selection state of the table header checkbox
 */
const selectionState = (table: any) => {
  if (table.getIsAllRowsSelected()) return true;
  if (table.getIsSomeRowsSelected()) return "indeterminate";
  return false;
};

/**
 * Column definitions for the flow table
 * Returns UI-agnostic column definitions with optional checkbox renderer
 */
export const flowColumns = (renderers?: TableRenderers) => [
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

  // ID column - displays the flow ID
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),

  // Flow class column - displays the flow class
  columnHelper.accessor("flowClass", {
    header: "Flow Class",
    cell: (info) => info.getValue(),
  }),

  // Description column - displays the flow description
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
];