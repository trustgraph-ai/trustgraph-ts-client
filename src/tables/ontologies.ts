import { createColumnHelper } from "@tanstack/react-table";
import { Ontology } from "../state/ontologies";

/**
 * Ontology table row type - tuple of [id, ontology]
 */
export type OntologyTableRow = [string, Ontology];

const columnHelper = createColumnHelper<OntologyTableRow>();

/**
 * Column definitions for the ontologies table
 * Returns UI-agnostic column definitions that can be used with any table component
 */
export const ontologyColumns = [
  columnHelper.accessor((row) => row[0], {
    id: "id",
    header: "ID",
    cell: (info) => info.getValue(),
  }),
  
  columnHelper.accessor((row) => row[1].metadata.name, {
    id: "name",
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  
  columnHelper.accessor((row) => row[1].metadata.description, {
    id: "description",
    header: "Description",
    cell: (info) => info.getValue() || "-",
  }),
  
  columnHelper.accessor((row) => Object.keys(row[1].concepts).length, {
    id: "conceptCount",
    header: "Concepts",
    cell: (info) => info.getValue(),
  }),
  
  columnHelper.accessor((row) => row[1].metadata.modified, {
    id: "modified",
    header: "Last Modified",
    cell: (info) => {
      const date = new Date(info.getValue());
      return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
  }),
];