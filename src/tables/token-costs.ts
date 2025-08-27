import { createColumnHelper } from "@tanstack/react-table";

/**
 * Token cost data structure for pricing table
 * Represents a single model's token pricing information
 */
export type TokenCost = {
  model: string; // Unique identifier for the model
  input_price: number; // Per-input token cost
  output_price: number; // Per-output token cost
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<TokenCost>();

/**
 * Column definitions for the token costs table
 * Returns UI-agnostic column definitions that can be used with any table component
 */
export const tokenCostColumns = [
  // Model column - displays the model ID
  columnHelper.accessor("model", {
    header: "Model ID",
    cell: (info) => info.getValue(),
  }),

  // Input token column - displays input token cost formatted as $/1M tokens
  columnHelper.accessor("input_price", {
    header: "Input cost ($/1Mt)",
    cell: (info) => (info.getValue() * 1000000).toFixed(3),
  }),

  // Output token column - displays output token cost formatted as $/1M tokens
  columnHelper.accessor("output_price", {
    header: "Output cost ($/1Mt)",
    cell: (info) => (info.getValue() * 1000000).toFixed(3),
  }),
];