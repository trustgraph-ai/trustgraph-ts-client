import { createColumnHelper } from "@tanstack/react-table";

/**
 * Flow class data structure for the flow classes table
 * Represents a flow class as a tuple with name and metadata
 */
export type FlowClassRow = [
  string,
  { description: string; [key: string]: unknown },
];

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<FlowClassRow>();

/**
 * Column definitions for the flow classes table
 * Returns UI-agnostic column definitions that can be used with any table component
 */
export const flowClassColumns = [
  // Name column - displays the flow class name (first element of tuple)
  columnHelper.accessor((row) => row[0], {
    id: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  }),

  // Description column - displays the flow class description
  columnHelper.accessor((row) => row[1]?.description || "", {
    id: "description",
    header: "Description",
    cell: (info) => info.getValue(),
  }),
];