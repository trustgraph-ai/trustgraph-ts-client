// UI-agnostic table definitions

// ✅ Migrated tables (UI-agnostic)
export { tokenCostColumns } from './token-costs'
export { ontologyColumns } from './ontologies'
export { mcpToolColumns } from './mcp-tools'
export { agentToolColumns } from './agent-tools'
export { promptColumns } from './prompts'
export { flowClassColumns } from './flow-classes'
export { nodePropertyColumns } from './node-properties'

export type { TokenCost } from './token-costs'
export type { OntologyTableRow } from './ontologies'
export type { McpTool } from './mcp-tools'
export type { AgentTool } from './agent-tools'
export type { Prompt } from './prompts'
export type { FlowClassRow } from './flow-classes'
export type { NodeProperty } from './node-properties'

// TODO: Remaining tables to migrate (have Chakra dependencies)
// export { documentColumns } from './document'
// export { flowColumns } from './flows'
// export { schemaColumns } from './schemas'
// export { knowledgeCoreColumns } from './knowledge-cores'
// export { promptColumns } from './prompts'
// export { processingColumns } from './processing'
// export { nodePropertyColumns } from './node-properties'
// export { nodeRelationshipColumns } from './node-relationships'

// Export renderer interface (defined in types but re-exported for convenience)
export type { TableRenderers } from '../types'