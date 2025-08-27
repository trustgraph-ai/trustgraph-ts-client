import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";

import { useSocket, useConnectionState } from "../api/trustgraph/socket";
import { useNotification } from "./notify";
import { useActivity } from "./activity";

/**
 * Metadata for an ontology definition
 * @public
 */
export interface OntologyMetadata {
  /** Name of the ontology */
  name: string;
  /** Human-readable description */
  description: string;
  /** Version identifier */
  version: string;
  /** ISO date when created */
  created: string;
  /** ISO date when last modified */
  modified: string;
  /** Creator/author of the ontology */
  creator: string;
  /** Namespace URI for the ontology */
  namespace: string;
}

/**
 * Individual concept within an ontology (SKOS-based)
 * @public
 */
export interface OntologyConcept {
  /** Unique identifier for the concept */
  id: string;
  /** Preferred label for display */
  prefLabel: string;
  /** Alternative labels/synonyms */
  altLabel?: string[];
  /** Formal definition of the concept */
  definition?: string;
  /** Scope note explaining usage */
  scopeNote?: string;
  /** Usage examples */
  example?: string[];
  /** Notation code */
  notation?: string;
  /** Parent concept URI (broader term) */
  broader?: string | null;
  /** Child concept URIs (narrower terms) */
  narrower?: string[];
  /** Related concept URIs */
  related?: string[];
  /** Whether this is a top-level concept */
  topConcept?: boolean;
}

/**
 * Concept scheme for organizing ontology concepts
 * @public
 */
export interface OntologyScheme {
  /** URI identifier for the scheme */
  uri: string;
  /** Preferred label for the scheme */
  prefLabel: string;
  /** URIs of top concepts in the scheme */
  hasTopConcept: string[];
}

/**
 * Complete ontology structure with metadata, concepts, and scheme
 * @public
 */
export interface Ontology {
  /** Ontology metadata */
  metadata: OntologyMetadata;
  /** Map of concept IDs to concepts */
  concepts: Record<string, OntologyConcept>;
  /** Concept scheme definition */
  scheme: OntologyScheme;
}

/**
 * Custom hook for managing ontology operations
 * Provides functionality for fetching, creating, updating, and deleting ontologies
 * @returns Ontology state and operations
 * @public
 */
export const useOntologies = () => {
  const socket = useSocket();
  const connectionState = useConnectionState();
  const queryClient = useQueryClient();
  const notify = useNotification();

  // Only enable queries when socket is connected and ready
  const isSocketReady =
    connectionState?.status === "authenticated" ||
    connectionState?.status === "unauthenticated";

  const ontologiesQuery = useQuery({
    queryKey: ["ontologies"],
    enabled: isSocketReady,
    queryFn: () => {
      return socket
        .config()
        .getValues("ontology")
        .then((values: { key: string; value: string }[]) => {
          return values.map((item: { key: string; value: string }) => [item.key, JSON.parse(item.value)]);
        })
        .catch((err) => {
          console.log("Error:", err);
          throw err;
        });
    },
  });

  const updateOntologyMutation = useMutation({
    mutationFn: ({
      id,
      ontology,
      onSuccess,
    }: {
      id: string;
      ontology: Ontology;
      onSuccess?: () => void;
    }) => {
      return socket
        .config()
        .putConfig([
          {
            type: "ontology",
            key: id,
            value: JSON.stringify(ontology),
          },
        ])
        .then((x: any) => {
          if (x && x["error"]) {
            console.log("Error:", x);
            throw x.error.message;
          }
          if (onSuccess) onSuccess();
        });
    },
    onError: (err) => {
      console.log("Error:", err);
      notify.error(err.toString());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ontologies"] });
      notify.success("Ontology updated");
    },
  });

  const createOntologyMutation = useMutation({
    mutationFn: ({
      id,
      ontology,
      onSuccess,
    }: {
      id: string;
      ontology: Ontology;
      onSuccess?: () => void;
    }) => {
      return socket
        .config()
        .putConfig([
          {
            type: "ontology",
            key: id,
            value: JSON.stringify(ontology),
          },
        ])
        .then((x: any) => {
          if (x && x["error"]) {
            console.log("Error:", x);
            throw x.error.message;
          }
          if (onSuccess) onSuccess();
        });
    },
    onError: (err) => {
      console.log("Error:", err);
      notify.error(err.toString());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ontologies"] });
      notify.success("Ontology created");
    },
  });

  const deleteOntologyMutation = useMutation({
    mutationFn: ({
      id,
      onSuccess,
    }: {
      id: string;
      onSuccess?: () => void;
    }) => {
      return socket
        .config()
        .deleteConfig({
          type: "ontology",
          key: id,
        })
        .then((x: any) => {
          if (x && x["error"]) {
            console.log("Error:", x);
            throw x.error.message;
          }
          if (onSuccess) onSuccess();
        });
    },
    onError: (err) => {
      console.log("Error:", err);
      notify.error(err.toString());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ontologies"] });
      notify.success("Ontology deleted");
    },
  });

  useActivity(ontologiesQuery.isLoading, "Loading ontologies");
  useActivity(updateOntologyMutation.isPending, "Updating ontology");
  useActivity(createOntologyMutation.isPending, "Creating ontology");
  useActivity(deleteOntologyMutation.isPending, "Deleting ontology");

  return {
    ontologies: ontologiesQuery.data || [],
    ontologiesLoading: ontologiesQuery.isLoading,
    ontologiesError: ontologiesQuery.error,

    updateOntology: updateOntologyMutation.mutate,
    isUpdatingOntology: updateOntologyMutation.isPending,

    createOntology: createOntologyMutation.mutate,
    isCreatingOntology: createOntologyMutation.isPending,

    deleteOntology: deleteOntologyMutation.mutate,
    isDeletingOntology: deleteOntologyMutation.isPending,

    refetch: () => {
      ontologiesQuery.refetch();
    },
  };
};
