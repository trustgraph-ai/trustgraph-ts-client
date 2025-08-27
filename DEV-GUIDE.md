# TrustGraph Client Development Guide

## Project Overview

This is a **UI-agnostic TypeScript client library** for TrustGraph, designed to provide WebSocket communication, state management, and React hooks for building TrustGraph-powered applications.

**Key Characteristics:**
- UI-agnostic - no Chakra UI, no specific UI framework dependencies
- TypeScript-first with comprehensive type safety
- React hooks for state management (Zustand + TanStack Query)
- WebSocket-based communication with TrustGraph servers
- Clean separation of concerns between API, state, and UI layers

## Directory Structure and Architecture

### Core Principles

1. **Domain-driven organization** - Related functionality is colocated
2. **UI-agnostic design** - No UI framework dependencies in core library
3. **Type safety first** - Comprehensive TypeScript coverage
4. **Clean API boundaries** - Clear separation between API, state, and presentation layers

### Directory Layout

```
src/
├── api/                    # WebSocket communication and API layer
│   └── trustgraph/         # TrustGraph-specific API implementations
│       ├── Socket.ts           # Main WebSocket interface
│       ├── SocketProvider.tsx  # React context provider
│       ├── messages.ts         # Message type definitions
│       └── ...
├── state/                  # Application state management
│   ├── chat.ts                # Chat message state (Zustand)
│   ├── progress.ts            # Loading/activity tracking
│   ├── session.ts             # Session and flow management
│   ├── settings.ts            # User settings management
│   ├── workbench.ts           # UI navigation state
│   └── ...                    # Domain-specific state files
├── hooks/                  # React hooks for data fetching
│   ├── useFlows.ts            # Workflow management hooks
│   ├── useLibrary.ts          # Document library hooks
│   ├── useTriples.ts          # Knowledge graph hooks
│   └── ...
└── types/                  # Shared TypeScript types
    └── index.ts               # Type exports
```

### Architecture Principles

**API Layer (`src/api/`)**
- WebSocket communication management
- Message serialization/deserialization
- Connection state management
- Authentication handling
- **No React dependencies** (except providers)

**State Layer (`src/state/`)**
- Zustand stores for UI state
- TanStack Query for server state
- Type-safe state interfaces
- **No UI framework dependencies**

**Hooks Layer (`src/hooks/`)**
- React hooks that combine API + State
- Data fetching and caching patterns
- Automatic loading state management
- **UI-agnostic data access**

## State Management Architecture

### UI State (Zustand)

Use Zustand for client-side UI state that doesn't need server synchronization:

```typescript
// ✅ Good - UI state with Zustand
export interface WorkbenchState {
  selected: Entity | null
  tool: string
  entities: Entity[]
  setSelected: (entity: Entity | null) => void
  setTool: (tool: string) => void
}

export const useWorkbenchStateStore = create<WorkbenchState>((set) => ({
  selected: null,
  tool: 'chat',
  entities: [],
  setSelected: (selected) => set({ selected }),
  setTool: (tool) => set({ tool }),
}))
```

### Server State (TanStack Query)

Use TanStack Query for server data that needs caching, background updates, and synchronization:

```typescript
// ✅ Good - Server state with TanStack Query
export const useFlows = () => {
  const socket = useSocket()
  
  return useQuery({
    queryKey: ['flows'],
    queryFn: () => socket.flows().list(),
    staleTime: 30 * 1000, // 30 seconds
  })
}
```

### Activity/Progress Tracking

Use the centralized progress system for loading states:

```typescript
// ✅ Automatic loading state tracking
const mutation = useMutation({
  mutationFn: (data) => socket.flows().start(data)
})

// Automatically tracks loading state globally
useActivity(mutation.isPending, "Starting workflow")
```

## API Design Patterns

### Socket Interface

The Socket interface provides the core API surface:

```typescript
export interface Socket {
  // AI Operations
  textCompletion(system: string, prompt: string): Promise<string>
  graphRag(query: string, options?: GraphRagOptions): Promise<string>
  agent(question: string, ...callbacks): void
  embeddings(text: string): Promise<number[][]>

  // Knowledge Graph
  triplesQuery(s?: Value, p?: Value, o?: Value, limit?: number): Promise<Triple[]>
  graphEmbeddingsQuery(vecs: number[][], limit: number): Promise<Value[]>

  // Factory Methods - Return specialized API objects
  librarian(): LibrarianApi
  flows(): FlowsApi  
  flow(id: string): FlowApi
  knowledge(): KnowledgeApi
  config(): ConfigApi

  // Connection Management  
  onConnectionStateChange(callback: (state: ConnectionState) => void): void
  close(): void
}
```

### Factory Pattern for API Organization

Use factory methods to organize related API calls:

```typescript
// ✅ Organized API access
const socket = useSocket()

// Document operations
const library = socket.librarian()
await library.upload(files)
await library.delete(ids)

// Workflow operations  
const flows = socket.flows()
await flows.start(flowConfig)
await flows.stop(flowIds)

// Configuration operations
const config = socket.config()
await config.get('llm')
await config.update('llm', 'model', 'gpt-4')
```

### Message Type Safety

All WebSocket messages are fully typed:

```typescript
// ✅ Type-safe message handling
export interface TextCompletionRequest {
  system: string
  prompt: string
}

export interface GraphRagRequest {
  query: string
  entity_limit?: number
  triple_limit?: number
  max_subgraph_size?: number
  path_length?: number
}
```

## Development Patterns

### Hook Composition

Compose hooks to create higher-level functionality:

```typescript
// ✅ Composable hooks
export const useEntityDetail = (uri: string, flow: string) => {
  const { entity, isLoading: entityLoading } = useEntity(uri, flow)
  const { relationships, isLoading: relationshipsLoading } = useEntityRelationships(uri, flow)
  
  return {
    entity,
    relationships, 
    isLoading: entityLoading || relationshipsLoading,
  }
}
```

### Error Handling

Use consistent error handling patterns:

```typescript
// ✅ Consistent error handling
export const useFlows = () => {
  const socket = useSocket()
  const notify = useNotification()
  
  return useMutation({
    mutationFn: (data) => socket.flows().start(data),
    onError: (error) => {
      console.error('Failed to start flow:', error)
      notify.error(`Failed to start workflow: ${error.message}`)
    },
    onSuccess: () => {
      notify.success('Workflow started successfully')
    }
  })
}
```

### Type Safety Best Practices

Always provide comprehensive TypeScript types:

```typescript
// ✅ Strong typing
export interface Triple {
  s: Value  // subject
  p: Value  // predicate  
  o: Value  // object
  direc?: string
}

export interface Value {
  v: string   // value
  e: boolean  // is entity (vs literal)
}

// ✅ Generic hooks with proper constraints
export const useTriples = <T extends Triple>(
  params: TriplesQueryParams
): QueryResult<T[]> => {
  // Implementation...
}
```

### Testing Patterns

Write tests for core functionality:

```typescript
// ✅ Test API interfaces
describe('Socket', () => {
  it('should handle text completion', async () => {
    const result = await socket.textCompletion('system', 'user prompt')
    expect(typeof result).toBe('string')
  })
  
  it('should manage connection state', () => {
    const states: ConnectionState[] = []
    socket.onConnectionStateChange((state) => states.push(state))
    
    // Test connection lifecycle...
  })
})

// ✅ Test hooks with React Testing Library
describe('useFlows', () => {
  it('should fetch flows data', async () => {
    const { result } = renderHook(() => useFlows())
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })
    
    expect(result.current.data).toBeDefined()
  })
})
```

## Documentation Standards

### TSDoc Comments

Use comprehensive TSDoc for all public APIs:

```typescript
/**
 * Generates vector embeddings for the given text
 * @param text - Input text to generate embeddings for
 * @returns Promise that resolves to a 2D array of embedding vectors
 * @public
 */
async embeddings(text: string): Promise<number[][]>

/**
 * Query the knowledge graph using RDF triples pattern matching
 * @param s - Subject value (optional)
 * @param p - Predicate value (optional) 
 * @param o - Object value (optional)
 * @param limit - Maximum number of results to return
 * @returns Promise that resolves to matching triples
 * @public
 */
async triplesQuery(s?: Value, p?: Value, o?: Value, limit?: number): Promise<Triple[]>
```

### Code Examples

Provide practical examples in documentation:

```typescript
// ✅ Real-world usage examples
/**
 * @example
 * ```typescript
 * // Basic entity search
 * const { triples, isLoading } = useTriples({
 *   s: { v: "Alice", e: true },
 *   limit: 100
 * })
 * 
 * // Pattern matching  
 * const { triples } = useTriples({
 *   p: { v: "knows", e: false }, // Find all "knows" relationships
 *   limit: 50
 * })
 * ```
 */
```

## Performance Considerations

### Query Optimization

Use proper caching and stale time strategies:

```typescript
// ✅ Optimized caching
export const useEntityDetail = (uri: string, flow: string) => {
  return useQuery({
    queryKey: ['entity', uri, flow],
    queryFn: () => fetchEntityDetail(uri, flow),
    staleTime: 5 * 60 * 1000,    // 5 minutes
    cacheTime: 10 * 60 * 1000,   // 10 minutes  
    enabled: !!uri && !!flow,    // Only run when params are available
  })
}
```

### WebSocket Connection Management

Manage connections efficiently:

```typescript
// ✅ Proper connection lifecycle
export const useSocket = () => {
  const context = useContext(SocketContext)
  
  if (!context) {
    throw new Error('useSocket must be used within SocketProvider')
  }
  
  return context
}

// ✅ Connection cleanup
useEffect(() => {
  const socket = createTrustGraphSocket()
  
  return () => {
    socket.close() // Clean up on unmount
  }
}, [])
```

### Bundle Size Optimization

Keep the library lean:

```typescript
// ✅ Tree-shakeable exports
export type { Socket, Triple, Value, Entity } from './api'
export { createTrustGraphSocket } from './api/trustgraph/Socket'
export { SocketProvider, useSocket } from './api/trustgraph/SocketProvider'

// ✅ Separate hooks exports for selective imports
export { 
  useTriples, 
  useEntityDetail, 
  useGraphSubgraph 
} from './hooks'
```

## Migration and Integration

### Integration with UI Frameworks

The library integrates with any React-based UI framework:

```typescript
// ✅ Framework-agnostic usage
import { SocketProvider, useSocket, useFlows } from '@trustgraph/client'

// Works with any UI framework
function MyReactApp() {
  return (
    <SocketProvider>
      <MyComponent />
    </SocketProvider>
  )
}

function MyComponent() {
  const { flows, isLoading } = useFlows()
  
  // Render with your UI framework of choice
  return (
    <div>
      {isLoading ? <Spinner /> : <FlowsList flows={flows} />}
    </div>
  )
}
```

### Gradual Migration

The library supports gradual adoption:

```typescript
// ✅ Progressive enhancement
// Start with basic socket usage
const socket = useSocket()

// Add state management incrementally  
const { workflows } = useFlows()

// Add UI state as needed
const { selected, setSelected } = useWorkbenchStateStore()
```

## Best Practices Summary

1. **Keep it UI-agnostic** - No UI framework dependencies in core library
2. **Type everything** - Comprehensive TypeScript coverage
3. **Separate concerns** - API, state, and UI are distinct layers
4. **Use proper caching** - TanStack Query for server state, Zustand for UI state  
5. **Handle loading states** - Use the centralized activity tracking system
6. **Document extensively** - TSDoc comments and practical examples
7. **Test thoroughly** - Unit tests for logic, integration tests for hooks
8. **Optimize performance** - Proper query keys, stale times, and connection management
9. **Enable tree-shaking** - Granular exports for optimal bundle sizes
10. **Design for composition** - Hooks should be composable and reusable

This architecture ensures the TrustGraph client library remains flexible, maintainable, and easy to integrate into any React application regardless of the UI framework choice.