/**
 * Represents a value in the TrustGraph knowledge graph
 * @public
 */
export interface Value {
  /** The actual value/content */
  v: string;
  /** Whether this value represents an entity (true) or literal (false) */
  e: boolean;
  /** Optional human-readable label for the value */
  label?: string;
}

/**
 * Represents a partial triple for querying - any component can be omitted
 * @public
 */
export interface PartialTriple {
  /** Subject (optional) */
  s?: Value;
  /** Predicate (optional) */
  p?: Value;
  /** Object (optional) */
  o?: Value;
}

/**
 * Represents a complete RDF triple (subject-predicate-object)
 * The fundamental unit of knowledge in the TrustGraph system
 * @public
 */
export interface Triple {
  /** Subject - what the statement is about */
  s: Value;
  /** Predicate - the relationship or property */
  p: Value;
  /** Object - the value or target of the relationship */
  o: Value;
  /** Optional direction indicator for graph traversal */
  direc?: string;
}
