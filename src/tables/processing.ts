import { createColumnHelper } from "@tanstack/react-table";
import { timeString } from "../utils/time-string";
import type { TableRenderers } from "../types";

/**
 * Processing data structure for the processing table
 * Represents a single processing object with its metadata and properties
 */
export type Processing = {
  id: string; // Unique identifier for the processing
  time: number; // Timestamp (likely Unix timestamp)
  "document-id": string; // Document ID
  flow: string; // Flow ID
  tags: string[]; // Array of tags associated with the document
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<Processing>();

/**
 * Column definitions for the processing table
 * Returns UI-agnostic column definitions that can be used with any table component
 */
export const processingColumns = (renderers?: TableRenderers) => [
  // ID column - displays the processing ID
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => info.getValue(),
  }),

  // Time column - displays formatted timestamp
  columnHelper.accessor("time", {
    header: "Time",
    cell: (info) => timeString(info.getValue()), // Convert to readable string
  }),

  // Document ID column
  columnHelper.accessor("document-id", {
    header: "Document ID",
    cell: (info) => info.getValue(),
  }),

  // Flow ID column
  columnHelper.accessor("flow", {
    header: "Flow ID",
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