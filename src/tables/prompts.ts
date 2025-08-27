import { createColumnHelper } from "@tanstack/react-table";
import type { TableRenderers } from "../types";

/**
 * Prompt data structure for the prompts table
 * Represents a prompt template with its metadata and configuration
 */
export type Prompt = {
  id: string; // Unique identifier for the prompt template
  prompt: string; // The prompt text content
  responseType: "json" | "text"; // Type of response expected
  hasSchema: boolean; // Whether the prompt has a schema defined
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<Prompt>();

/**
 * Column definitions for the prompts table
 * Returns UI-agnostic column definitions that can be used with any table component
 */
export const promptColumns = (renderers?: TableRenderers) => [
  // ID column - displays the prompt template ID
  columnHelper.accessor("id", {
    header: "ID",
    cell: (info) => {
      const value = info.getValue();
      return renderers?.code ? renderers.code(value) : value;
    },
  }),

  // Prompt column - displays the prompt text content
  columnHelper.accessor("prompt", {
    header: "Prompt", 
    cell: (info) => {
      const value = info.getValue();
      return renderers?.code ? renderers.code(value) : value;
    },
  }),

  // Response type column - displays the expected response format
  columnHelper.accessor("responseType", {
    header: "Response",
    cell: (info) => {
      const value = info.getValue();
      return value === "json" ? "JSON" : "text";
    },
  }),

  // Schema column - displays whether the prompt has a schema
  columnHelper.accessor("hasSchema", {
    header: "Schema?",
    cell: (info) => (info.getValue() ? "yes" : "no"),
  }),
];