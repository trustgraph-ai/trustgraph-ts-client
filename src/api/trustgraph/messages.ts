import type { Triple, Value } from './Triple';

/**
 * Generic request type - will be refined in future versions
 * @public
 */
export type Request = object;

/**
 * Generic response type - will be refined in future versions
 * @public
 */
export type Response = object;

/**
 * Error type for API responses
 * @public
 */
export type Error = object | string;

/**
 * Standard request message structure for WebSocket communication
 * @public
 */
export interface RequestMessage {
  /** Unique message identifier */
  id: string;
  /** Target service name */
  service: string;
  /** Request payload */
  request: Request;
  /** Optional flow context */
  flow?: string;
}

/**
 * Standard response message structure from WebSocket
 * @public
 */
export interface ApiResponse {
  /** Message ID matching the original request */
  id: string;
  /** Response payload */
  response: Response;
}

/**
 * Metadata container for various API operations
 * @public
 */
export interface Metadata {
  /** Optional identifier */
  id?: string;
  /** Knowledge graph metadata as triples */
  metadata?: Triple[];
  /** User context */
  user?: string;
  /** Collection context */
  collection?: string;
}

/**
 * Entity with associated embedding vectors
 * @public
 */
export interface EntityEmbeddings {
  /** The entity value */
  entity?: Value;
  /** Embedding vectors for the entity */
  vectors?: number[][];
}

/**
 * Collection of entities with embeddings and metadata
 * @public
 */
export interface GraphEmbeddings {
  /** Associated metadata */
  metadata?: Metadata;
  /** Array of entities with their embeddings */
  entities?: EntityEmbeddings[];
}

/**
 * Request for AI text completion
 * @public
 */
export interface TextCompletionRequest {
  /** System prompt/instructions */
  system: string;
  /** User prompt */
  prompt: string;
}

/**
 * Response from AI text completion
 * @public
 */
export interface TextCompletionResponse {
  /** Generated text response */
  response: string;
}

/**
 * Request for Graph-based Retrieval Augmented Generation
 * @public
 */
export interface GraphRagRequest {
  /** Query text */
  query: string;
  /** Maximum entities to retrieve (default: 50) */
  "entity-limit"?: number;
  /** Maximum triples to retrieve (default: 30) */
  "triple-limit"?: number;
  /** Maximum subgraph size (default: 1000) */
  "max-subgraph-size"?: number;
  /** Maximum path length for traversal (default: 2) */
  "max-path-length"?: number;
}

/**
 * Response from Graph RAG query
 * @public
 */
export interface GraphRagResponse {
  /** Generated response using graph context */
  response: string;
}

/**
 * Request for AI agent interaction
 * @public
 */
export interface AgentRequest {
  /** Question for the agent */
  question: string;
}

/**
 * Response from AI agent with different phases
 * @public
 */
export interface AgentResponse {
  /** Agent's reasoning/thinking process */
  thought?: string;
  /** Agent's observations */
  observation?: string;
  /** Agent's final answer */
  answer?: string;
  /** Error message if something went wrong */
  error?: string;
}

/**
 * Request for text embeddings generation
 * @public
 */
export interface EmbeddingsRequest {
  /** Text to generate embeddings for */
  text: string;
}

/**
 * Response containing generated embeddings
 * @public
 */
export interface EmbeddingsResponse {
  /** Array of embedding vectors */
  vectors: number[][];
}

export interface GraphEmbeddingsQueryRequest {
  vectors: number[][];
  limit: number;
}

export interface GraphEmbeddingsQueryResponse {
  entities: Value[];
}

export interface TriplesQueryRequest {
  s?: Value;
  p?: Value;
  o?: Value;
  limit: number;
}

export interface TriplesQueryResponse {
  response: Triple[];
}

export interface LoadDocumentRequest {
  id?: string;
  data: string;
  metadata?: Triple[];
}

export type LoadDocumentResponse = void;

export interface LoadTextRequest {
  id?: string;
  text: string;
  charset?: string;
  metadata?: Triple[];
}

export type LoadTextResponse = void;

export interface DocumentMetadata {
  id?: string;
  time?: number;
  kind?: string;
  title?: string;
  comments?: string;
  metadata?: Triple[];
  user?: string;
  tags?: string[];
}

export interface ProcessingMetadata {
  id?: string;
  "document-id"?: string;
  time?: number;
  flow?: string;
  user?: string;
  collection?: string;
  tags?: string[];
}

export interface LibraryRequest {
  operation: string;
  "document-id"?: string;
  "processing-id"?: string;
  "document-metadata"?: DocumentMetadata;
  "processing-metadata"?: ProcessingMetadata;
  content?: string;
  user?: string;
  collection?: string;
  metadata?: Triple[];
}

export interface LibraryResponse {
  error: Error;
  "document-metadata"?: DocumentMetadata;
  content?: string;
  "document-metadatas"?: DocumentMetadata[];
  "processing-metadata"?: ProcessingMetadata;
}

export interface KnowledgeRequest {
  operation: string;
  user?: string;
  id?: string;
  flow?: string;
  collection?: string;
  triples?: Triple[];
  "graph-embeddings"?: GraphEmbeddings;
}

export interface KnowledgeResponse {
  error?: Error;
  ids?: string[];
  eos?: boolean;
  triples?: Triple[];
  "graph-embeddings"?: GraphEmbeddings;
}

export interface FlowRequest {
  operation: string;
  "class-name"?: string;
  "class-definition"?: string;
  description?: string;
  "flow-id"?: string;
}

export interface FlowResponse {
  "class-names"?: string[];
  "flow-ids"?: string[];
  "class-definition"?: string;
  flow?: string;
  description?: string;
  error?: Error;
}

export type ConfigRequest = object;
export type ConfigResponse = object;
