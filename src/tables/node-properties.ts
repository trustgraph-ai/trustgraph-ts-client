import { createColumnHelper } from "@tanstack/react-table";

/**
 * Node property data structure for the node properties table
 * Represents a single property with its predicate label and value
 */
export type NodeProperty = {
  property: string; // Human-readable property name (label)
  value: string; // Property value
  uri?: string; // Original property URI (optional, for reference)
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<NodeProperty>();

/**
 * Column definitions for the node properties table
 * Returns UI-agnostic column definitions that can be used with any table component
 */
export const nodePropertyColumns = [
  // Property column - displays the property name/label
  columnHelper.accessor("property", {
    header: "Property",
    cell: (info) => info.getValue(),
  }),

  // Value column - displays the property value
  columnHelper.accessor("value", {
    header: "Value",
    cell: (info) => info.getValue(),
  }),
];