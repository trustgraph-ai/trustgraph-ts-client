// Type definitions exports

// Re-export all types from model
export * from '../model/schemaTypes'
export * from '../model/message'
export * from '../model/document-metadata'
export * from '../model/settings-types'

// Re-export specific types to avoid conflicts
export type { 
  PartialTriple as ModelPartialTriple,
  Triple as ModelTriple,
  Value as ModelValue 
} from '../model/triples'

// Re-export API types with specific names to avoid conflicts
export type {
  Triple as ApiTriple,
  PartialTriple as ApiPartialTriple,
  Value as ApiValue
} from '../api/trustgraph/Triple'

export * from '../api/trustgraph/messages'

// Common type definitions
export interface SocketConfig {
  url: string
  reconnect?: boolean
  reconnectInterval?: number
  reconnectMaxRetries?: number
}

export interface NotificationConfig {
  type: 'info' | 'success' | 'warning' | 'error'
  message: string
  duration?: number
  id?: string
}

export interface TableRenderers {
  tag?: (value: string, color?: string) => React.ReactNode
  checkbox?: (checked: boolean, onChange: () => void) => React.ReactNode
  code?: (value: string) => React.ReactNode
  badge?: (items: string[]) => React.ReactNode
  button?: (label: string, onClick: () => void, variant?: string) => React.ReactNode
}