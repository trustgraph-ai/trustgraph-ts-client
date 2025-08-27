import { createColumnHelper } from "@tanstack/react-table";
import type { TableRenderers } from "../types";

/**
 * Node relationship data structure for the relationships table
 * Represents a single relationship with direction and label
 */
export type NodeRelationship = {
  relationship: string; // Human-readable relationship name (label)
  direction: "incoming" | "outgoing"; // Direction of the relationship
  uri?: string; // Original relationship URI (optional, for reference)
  onRelationshipClick?: (uri: string) => void; // Click handler for relationships
};

// Create a column helper instance for type-safe column definitions
const columnHelper = createColumnHelper<NodeRelationship>();

/**
 * Column definitions for the node relationships table
 * Returns UI-agnostic column definitions with optional button renderer
 */
export const nodeRelationshipColumns = (renderers?: TableRenderers) => [
  // Relationship column - displays the relationship with directional indicator
  columnHelper.accessor("relationship", {
    header: "Relationship",
    cell: (info) => {
      const direction = info.row.original.direction;
      const relationship = info.getValue();
      const uri = info.row.original.uri;
      const onRelationshipClick = info.row.original.onRelationshipClick;

      // Direction indicators
      const arrow = direction === "incoming" ? "← " : " →";
      const displayText = direction === "incoming" 
        ? `${arrow}${relationship}` 
        : `${relationship}${arrow}`;

      // Use custom button renderer if provided
      if (renderers?.button && onRelationshipClick && uri) {
        return renderers.button(
          displayText, 
          () => onRelationshipClick(uri),
          direction === "outgoing" ? "primary" : "secondary"
        );
      }

      // Fallback to plain text with direction indicator
      return displayText;
    },
  }),
];