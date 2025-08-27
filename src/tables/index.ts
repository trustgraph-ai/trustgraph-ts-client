// Table definitions exports

// Import and re-export table column definitions
// These will be converted to UI-agnostic format in the migration phase

export { documentColumns } from '../model/document-table'
export { flowColumns, flowClassColumns } from '../model/flow-table'
export { flowClassesColumns } from '../model/flow-classes-table'
export { schemaColumns } from '../model/schemas-table'
export { ontologyColumns } from '../model/ontologies-table'
export { knowledgeCoreColumns } from '../model/knowledge-core-table'
export { promptColumns } from '../model/prompts-table'
export { processingColumns } from '../model/processing-table'
export { nodePropertyColumns } from '../model/node-properties-table'
export { nodeRelationshipColumns } from '../model/node-relationships-table'
export { agentToolColumns } from '../model/agent-tools-table'
export { mcpToolColumns } from '../model/mcp-tools-table'
export { tokenCostColumns } from '../model/token-costs-table'

// Export renderer interface (defined in types but re-exported for convenience)
export type { TableRenderers } from '../types'