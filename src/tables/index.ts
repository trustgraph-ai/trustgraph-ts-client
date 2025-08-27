// UI-agnostic table definitions

// ✅ Migrated tables (UI-agnostic)
export { tokenCostColumns } from './token-costs'
export { ontologyColumns } from './ontologies'
export { mcpToolColumns } from './mcp-tools'
export { agentToolColumns } from './agent-tools'
export { promptColumns } from './prompts'
export { flowClassColumns } from './flow-classes'
export { nodePropertyColumns } from './node-properties'
export { processingColumns } from './processing'
export { schemaColumns } from './schemas'
export { nodeRelationshipColumns } from './node-relationships'
export { documentColumns } from './document'
export { flowColumns } from './flows'
export { knowledgeCoreColumns } from './knowledge-cores'

export type { TokenCost } from './token-costs'
export type { OntologyTableRow } from './ontologies'
export type { McpTool } from './mcp-tools'
export type { AgentTool } from './agent-tools'
export type { Prompt } from './prompts'
export type { FlowClassRow } from './flow-classes'
export type { NodeProperty } from './node-properties'
export type { Processing } from './processing'
export type { SchemaTableRow, Schema, SchemaField } from './schemas'
export type { NodeRelationship } from './node-relationships'
export type { Document } from './document'
export type { Flow } from './flows'
export type { KnowledgeCore } from './knowledge-cores'

// Export renderer interface (defined in types but re-exported for convenience)
export type { TableRenderers } from '../types'