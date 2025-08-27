import React from "react";
import { createColumnHelper } from "@tanstack/react-table";

export interface SchemaField {
  id: string; // Unique identifier for React keys
  name: string;
  type: "string" | "integer" | "float" | "boolean" | "timestamp" | "enum";
  primary_key?: boolean;
  required?: boolean;
  enum?: string[];
}

export interface Schema {
  name: string;
  description: string;
  fields: SchemaField[];
  indexes?: string[];
}

export type SchemaTableRow = [string, Schema];

const columnHelper = createColumnHelper<SchemaTableRow>();

export const schemaColumns = (renderers?: {
  code?: (value: string) => React.ReactNode;
  badge?: (badges: string[]) => React.ReactNode;
}) => [
  columnHelper.accessor("0", {
    header: "ID",
    cell: (info) => {
      const value = info.getValue();
      return renderers?.code ? renderers.code(value) : value;
    },
  }),
  columnHelper.accessor((row) => row[1].description, {
    id: "description",
    header: "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.display({
    id: "fields",
    header: "Fields",
    cell: ({ row }) => {
      const fields = row.original[1].fields;
      const fieldCount = fields.length;
      const pkCount = fields.filter((f) => f.primary_key).length;
      
      const fieldInfo = `${fieldCount} field${fieldCount !== 1 ? "s" : ""}`;
      const pkInfo = pkCount > 0 ? `${pkCount} PK` : null;
      
      if (renderers?.badge) {
        const badges = [fieldInfo];
        if (pkInfo) badges.push(pkInfo);
        return renderers.badge(badges);
      }
      
      // Fallback to plain text
      const parts = [fieldInfo];
      if (pkInfo) parts.push(pkInfo);
      return parts.join(" • ");
    },
  }),
  columnHelper.display({
    id: "types",
    header: "Types",
    cell: ({ row }) => {
      const types = [...new Set(row.original[1].fields.map((f) => f.type))];
      
      if (renderers?.badge) {
        return renderers.badge(types);
      }
      
      // Fallback to plain text
      return types.join(", ");
    },
  }),
  columnHelper.display({
    id: "indexes",
    header: "Indexes",
    cell: ({ row }) => {
      const indexes = row.original[1].indexes || [];
      return indexes.length > 0 ? indexes.join(", ") : "None";
    },
  }),
];
