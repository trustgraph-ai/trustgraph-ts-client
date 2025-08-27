import { createColumnHelper } from "@tanstack/react-table";
import { timeString } from "../utils/time-string";
import type { TableRenderers } from "../types";

/**
 * Document data structure for the document table
 * Represents a single document with its metadata and properties
 */
export type Document = {
  id: string; // Unique identifier for the document
  title: string; // Display title of the document
  time: number; // Timestamp (likely Unix timestamp)
  kind: string; // Document type/category
  user: string; // User who created/owns the document
  comments: string; // Description or comments about the document
  tags: string[]; // Array of tags associated with the document
  metadata: {
    // Structured metadata, subject-predicate-object form
    s: { v: string; e: boolean }; // Subject with value and enabled flag
    p: { v: string; e: boolean }; // Predicate with value and enabled flag
    o: { v: string; e: boolean }; // Object with value and enabled flag
  }[];
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<Document>();

/**
 * Helper function to determine the selection state of the table header checkbox
 * Returns the appropriate state for the "select all" checkbox
 */
const selectionState = (table: any) => {
  if (table.getIsAllRowsSelected()) return true;
  if (table.getIsSomeRowsSelected()) return "indeterminate";
  return false;
};

/**
 * Column definitions for the document table
 * Returns UI-agnostic column definitions with optional renderers for tags and checkboxes
 */
export const documentColumns = (renderers?: TableRenderers) => [
  // Selection column - provides row selection functionality with checkboxes
  columnHelper.display({
    id: "select",
    header: ({ table }) => {
      const state = selectionState(table);
      const handler = table.getToggleAllRowsSelectedHandler();
      
      if (renderers?.checkbox) {
        return renderers.checkbox(
          state === true,
          () => handler({}),
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
        return renderers.checkbox(isSelected, () => handler({}));
      }
      
      // Fallback to text indicator
      return isSelected ? "☑" : "☐";
    },
  }),

  // Title column - displays the document title
  columnHelper.accessor("title", {
    header: "Title",
    cell: (info) => info.getValue(),
  }),

  // Time column - displays formatted timestamp
  columnHelper.accessor("time", {
    header: "Time", 
    cell: (info) => timeString(info.getValue()), // Convert to readable string
  }),

  // Description column - displays document comments/description
  columnHelper.accessor("comments", {
    id: "description",
    header: "Description",
    cell: (info) => info.getValue(),
  }),

  // Tags column - displays document tags with optional tag renderer
  columnHelper.accessor("tags", {
    header: "Tags",
    cell: (info) => {
      const tags = info.getValue();
      if (!tags || tags.length === 0) return null;
      
      if (renderers?.badge) {
        return renderers.badge(tags);
      }
      
      // Fallback to plain text comma-separated
      return tags.join(", ");
    },
  }),
];