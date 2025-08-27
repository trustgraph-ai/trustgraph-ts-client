# TrustGraph Client API Guide

A comprehensive guide to using the TrustGraph client library's APIs and state management.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Core API](#core-api)
  - [Socket Connection](#socket-connection)
  - [AI Operations](#ai-operations)
  - [Knowledge Graph](#knowledge-graph)
  - [Document Management](#document-management)
  - [Configuration](#configuration)
- [State Management](#state-management)
  - [UI State](#ui-state)
  - [Data Hooks](#data-hooks)
  - [Utility Hooks](#utility-hooks)
- [Complete API Reference](#complete-api-reference)

## Overview

The TrustGraph client library provides a comprehensive set of APIs for:
- WebSocket-based communication with TrustGraph servers
- AI operations (text completion, embeddings, agents)
- Knowledge graph management (triples, entities, relationships)
- Document processing and library management
- State management for React applications

## Getting Started

### Installation

```bash
npm install @trustgraph/client
```

### Basic Setup

```typescript
import { SocketProvider, TrustGraphProvider } from '@trustgraph/client/providers'
import { useSocket } from '@trustgraph/client'

// Wrap your app with providers
function App() {
  return (
    <SocketProvider>
      <TrustGraphProvider>
        <YourApp />
      </TrustGraphProvider>
    </SocketProvider>
  )
}

// Use the socket in components
function MyComponent() {
  const socket = useSocket()
  // Use socket methods...
}
```

## Core API

### Socket Connection

The core of the library is the WebSocket connection managed through the Socket interface.

#### Creating a Socket

```typescript
import { createTrustGraphSocket } from '@trustgraph/client'

// Create with optional API key for authentication
const socket = createTrustGraphSocket(apiKey)
```

#### Connection Management

```typescript
// Monitor connection state
socket.onConnectionStateChange((state) => {
  console.log('Connection status:', state.status)
  // status: 'connecting' | 'connected' | 'authenticated' | 'failed'
})

// Close connection
socket.close()
```

#### Using with React

```typescript
import { useSocket, useConnectionState } from '@trustgraph/client'

function Component() {
  const socket = useSocket()
  const connectionState = useConnectionState()
  
  if (connectionState.status === 'failed') {
    return <div>Connection failed: {connectionState.lastError}</div>
  }
  
  // Use socket...
}
```

### AI Operations

#### Text Completion

Generate text using AI models:

```typescript
const socket = useSocket()

// Simple completion
const response = await socket.textCompletion(
  "You are a helpful assistant",  // system prompt
  "Explain quantum computing"       // user prompt
)
```

#### Graph RAG (Retrieval Augmented Generation)

Use knowledge graph context for enhanced AI responses:

```typescript
const response = await socket.graphRag(
  "What is the relationship between Alice and Bob?",
  {
    entityLimit: 50,      // Max entities to retrieve
    tripleLimit: 30,      // Max triples to retrieve
    maxSubgraphSize: 1000, // Max subgraph size
    pathLength: 2         // Max traversal depth
  }
)
```

#### Agent Interactions

Stream agent responses with thinking/observation phases:

```typescript
socket.agent(
  "Analyze the sales data and create a report",
  (thinking) => console.log("Thinking:", thinking),
  (observation) => console.log("Observing:", observation),
  (answer) => console.log("Answer:", answer),
  (error) => console.error("Error:", error)
)
```

#### Embeddings

Generate vector embeddings for semantic operations:

```typescript
// Generate embeddings for text
const vectors = await socket.embeddings("quantum computing concepts")

// Query knowledge graph using embeddings
const entities = await socket.graphEmbeddingsQuery(vectors, 10)
```

### Knowledge Graph

#### Triples Management

Work with RDF triples (subject-predicate-object):

```typescript
// Query triples
const triples = await socket.triplesQuery(
  { v: "Alice", e: true },        // subject (entity)
  { v: "knows", e: false },        // predicate (literal)
  undefined,                        // object (any)
  100                              // limit
)

// Using the hook
import { useTriples } from '@trustgraph/client/state'

function Component() {
  const { triples, isLoading, error } = useTriples({
    flow: "default",
    s: { v: "Alice", e: true },
    limit: 100
  })
  
  if (isLoading) return <div>Loading...</div>
  
  return (
    <div>
      {triples?.map(triple => (
        <div>{triple.s.v} - {triple.p.v} - {triple.o.v}</div>
      ))}
    </div>
  )
}
```

#### Entity Management

```typescript
import { useEntityDetail } from '@trustgraph/client/state'

function EntityView({ uri }) {
  const { entity, relationships, isLoading } = useEntityDetail(uri, "default")
  
  return (
    <div>
      <h2>{entity?.label}</h2>
      <ul>
        {relationships?.map(rel => (
          <li>{rel.relationship}: {rel.target}</li>
        ))}
      </ul>
    </div>
  )
}
```

#### Graph Visualization

```typescript
import { useGraphSubgraph } from '@trustgraph/client/state'

function GraphViz({ entityUri }) {
  const {
    view,           // Subgraph data
    updateSubgraph, // Expand by clicking nodes
    navigateByRelationship, // Follow specific relationships
    isLoading
  } = useGraphSubgraph(entityUri, "default")
  
  // Render graph visualization...
}
```

### Document Management

#### Library Operations

```typescript
import { useLibrary } from '@trustgraph/client/state'

function DocumentManager() {
  const {
    documents,
    uploadFiles,
    uploadTexts,
    deleteDocuments,
    submitDocuments
  } = useLibrary()
  
  // Upload files
  const handleUpload = (files: File[]) => {
    uploadFiles({
      files,
      params: {
        title: "Research Papers",
        comments: "Q4 2024 research",
        keywords: ["research", "ai", "ml"]
      },
      mimeType: "application/pdf",
      user: "researcher1"
    })
  }
  
  // Submit for processing
  const handleProcess = (docIds: string[]) => {
    submitDocuments({
      ids: docIds,
      flow: "extract-entities",
      tags: ["priority", "research"]
    })
  }
  
  // Delete documents
  const handleDelete = (docIds: string[]) => {
    deleteDocuments({ ids: docIds })
  }
}
```

#### Processing Status

```typescript
import { useProcessing } from '@trustgraph/client/state'

function ProcessingMonitor() {
  const { processing, isLoading } = useProcessing()
  
  return (
    <div>
      {processing?.map(proc => (
        <div key={proc.id}>
          {proc['document-id']}: {proc.flow} - {proc.tags?.join(', ')}
        </div>
      ))}
    </div>
  )
}
```

### Configuration

#### System Configuration

```typescript
import { useTrustGraphConfig } from '@trustgraph/client/state'

function ConfigManager() {
  const {
    config,
    updateConfig,
    deleteConfig
  } = useTrustGraphConfig()
  
  // Update configuration
  updateConfig({
    type: "llm",
    key: "model",
    value: "gpt-4"
  })
}
```

#### Token Costs

```typescript
import { useTokenCosts } from '@trustgraph/client/state'

function TokenCostManager() {
  const {
    tokenCosts,
    updateTokenCost,
    deleteTokenCosts
  } = useTokenCosts()
  
  // Update token pricing (per million tokens)
  updateTokenCost({
    model: "gpt-4",
    input_price: 30,  // $30 per 1M tokens
    output_price: 60  // $60 per 1M tokens
  })
}
```

## State Management

### UI State

#### Chat State

```typescript
import { useChatStateStore, ChatMode } from '@trustgraph/client/state'

function Chat() {
  const {
    messages,
    input,
    chatMode,
    addMessage,
    setInput,
    setChatMode
  } = useChatStateStore()
  
  const sendMessage = () => {
    addMessage("user", input)
    // Process message...
    setInput("")
  }
  
  const switchMode = (mode: ChatMode) => {
    setChatMode(mode) // "graph-rag" | "agent" | "basic-llm"
  }
}
```

#### Session State

```typescript
import { useSessionStore } from '@trustgraph/client/state'

function SessionManager() {
  const {
    flowId,
    flow,
    flowDescription,
    setFlowId,
    setFlow
  } = useSessionStore()
  
  // Track current workflow context
  setFlowId("analysis-2024-01")
  setFlow("entity-extraction")
}
```

#### Search State

```typescript
import { useSearchStateStore } from '@trustgraph/client/state'

function Search() {
  const {
    rows,
    input,
    setRows,
    setInput
  } = useSearchStateStore()
  
  const handleSearch = async () => {
    const results = await performSearch(input)
    setRows(results)
  }
}
```

#### Progress Tracking

```typescript
import { useProgressStateStore, useActivity } from '@trustgraph/client/state'

function ProgressBar() {
  const { activity, error } = useProgressStateStore()
  
  return (
    <div>
      {activity.size > 0 && (
        <div>Loading: {Array.from(activity).join(', ')}</div>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  )
}

// Track activity automatically
function DataLoader() {
  const query = useQuery(/* ... */)
  useActivity(query.isLoading, "Loading data")
}
```

#### Workbench State

```typescript
import { useWorkbenchStateStore } from '@trustgraph/client/state'

function Workbench() {
  const {
    selected,
    tool,
    entities,
    setSelected,
    setTool
  } = useWorkbenchStateStore()
  
  // Navigate between tools
  const switchTool = (toolName: string) => {
    setTool(toolName) // "chat" | "graph" | "search" | etc
  }
  
  // Select entity for details
  const selectEntity = (entity: Entity) => {
    setSelected(entity)
    setTool("entity-details")
  }
}
```

#### Document Loading State

```typescript
import { useLoadStateStore } from '@trustgraph/client/state'

function DocumentUploader() {
  const {
    title,
    comments,
    keywords,
    files,
    setTitle,
    setComments,
    setKeywords,
    setFiles
  } = useLoadStateStore()
  
  // Manage document metadata before upload
  const prepareUpload = () => {
    setTitle("Research Document")
    setComments("Important findings")
    setKeywords(["research", "2024"])
  }
}
```

### Data Hooks

#### Flows Management

```typescript
import { useFlows } from '@trustgraph/client/state'

function FlowManager() {
  const {
    flows,
    flowClasses,
    startFlow,
    stopFlows,
    isLoading
  } = useFlows()
  
  const handleStart = () => {
    startFlow({
      id: "flow-001",
      flowClass: "entity-extraction",
      description: "Extract entities from documents"
    })
  }
}
```

#### Schemas

```typescript
import { useSchemas } from '@trustgraph/client/state'

function SchemaEditor() {
  const {
    schemas,
    updateSchema,
    deleteSchema
  } = useSchemas()
  
  const handleUpdate = () => {
    updateSchema({
      id: "person",
      schema: {
        fields: [
          { name: "name", type: "string", required: true },
          { name: "age", type: "number" }
        ]
      }
    })
  }
}
```

#### Ontologies

```typescript
import { useOntologies } from '@trustgraph/client/state'

function OntologyBrowser() {
  const { ontologies, updateOntology } = useOntologies()
  
  return (
    <div>
      {ontologies?.map(([id, ontology]) => (
        <div key={id}>
          <h3>{ontology.metadata.name}</h3>
          <p>{ontology.metadata.description}</p>
          {/* Display concepts hierarchy */}
        </div>
      ))}
    </div>
  )
}
```

#### Knowledge Cores

```typescript
import { useKnowledgeCores } from '@trustgraph/client/state'

function KnowledgeCoreManager() {
  const {
    cores,
    uploadCore,
    downloadCore,
    deleteCores
  } = useKnowledgeCores()
  
  // Export knowledge core
  const handleExport = async (coreId: string) => {
    const data = await downloadCore(coreId)
    // Save to file...
  }
}
```

#### Prompts Management

```typescript
import { usePrompts } from '@trustgraph/client/state'

function PromptTemplates() {
  const {
    prompts,
    systemPrompt,
    updatePrompt,
    updateSystemPrompt
  } = usePrompts()
  
  // Update the system-wide prompt
  updateSystemPrompt({
    prompt: "You are a helpful AI assistant specialized in data analysis"
  })
  
  // Create a new prompt template
  updatePrompt({
    id: "analysis-prompt",
    prompt: "Analyze the following data: {{data}}",
    responseType: "json",
    hasSchema: true
  })
}
```

#### Agent Tools

```typescript
import { useAgentTools } from '@trustgraph/client/state'

function AgentToolConfig() {
  const {
    tools,
    updateTool,
    deleteTool
  } = useAgentTools()
  
  const addTool = () => {
    updateTool({
      id: "web-search",
      name: "Web Search",
      description: "Search the web for information",
      type: "function"
    })
  }
}
```

#### MCP Tools

```typescript
import { useMcpTools } from '@trustgraph/client/state'

function McpToolManager() {
  const {
    tools,
    updateTool,
    deleteTool
  } = useMcpTools()
  
  const configureTool = () => {
    updateTool({
      id: "mcp-browser",
      "remote-name": "browser-automation",
      url: "mcp://localhost:3000"
    })
  }
}
```

### Utility Hooks

#### Settings Management

```typescript
import { useSettings } from '@trustgraph/client/state'

function Settings() {
  const {
    settings,
    updateSetting,
    resetSettings,
    exportSettings,
    importSettings
  } = useSettings()
  
  // Update API key
  updateSetting("authentication.apiKey", "sk-...")
  
  // Update GraphRAG settings
  updateSetting("graphrag.entityLimit", 100)
  
  // Export/Import settings
  const handleExport = () => {
    const json = exportSettings()
    downloadAsFile(json, "settings.json")
  }
  
  const handleImport = (jsonString: string) => {
    importSettings(jsonString)
  }
}
```

#### Notifications

```typescript
import { useNotification, useNotificationSubscription } from '@trustgraph/client/state'

// Emit notifications from anywhere
function DataProcessor() {
  const notify = useNotification()
  
  const processData = async () => {
    try {
      await process()
      notify.success("Processing complete!")
    } catch (error) {
      notify.error(`Failed: ${error.message}`)
    }
  }
}

// Subscribe to notifications in UI layer
function NotificationToast() {
  useNotificationSubscription((notification) => {
    // Display using your UI framework
    showToast({
      type: notification.type,
      message: notification.message,
      duration: notification.duration
    })
  })
}
```

#### Embeddings Generation

```typescript
import { useEmbeddings } from '@trustgraph/client/state'

function SemanticSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const { embeddings, isLoading } = useEmbeddings({
    flow: "default",
    term: searchTerm
  })
  
  useEffect(() => {
    if (embeddings) {
      // Use embeddings for semantic search
      performSemanticSearch(embeddings)
    }
  }, [embeddings])
}
```

#### Vector Search

```typescript
import { useVectorSearch } from '@trustgraph/client/state'

function VectorSearchUI() {
  const { query } = useVectorSearch()
  
  const handleSearch = async (term: string) => {
    const results = await query({
      flow: "default",
      term: term,
      limit: 20
    })
    
    // Display results...
  }
}
```

#### Graph Embeddings

```typescript
import { useGraphEmbeddings } from '@trustgraph/client/state'

function SimilaritySearch() {
  const [vectors, setVectors] = useState<number[][]>([])
  
  const { entities, isLoading } = useGraphEmbeddings({
    flow: "default",
    vecs: vectors,
    limit: 10
  })
  
  // Display similar entities...
}
```

## Complete API Reference

### Core Socket Methods

| Method | Description | Parameters | Returns |
|--------|-------------|------------|---------|
| `textCompletion` | Generate text completion | `system: string, prompt: string` | `Promise<string>` |
| `graphRag` | Graph-enhanced RAG | `query: string, options?: GraphRagOptions` | `Promise<string>` |
| `agent` | Streaming agent interaction | `question: string, callbacks...` | `void` |
| `embeddings` | Generate text embeddings | `text: string` | `Promise<number[][]>` |
| `graphEmbeddingsQuery` | Query by embeddings | `vecs: number[][], limit: number` | `Promise<Value[]>` |
| `triplesQuery` | Query knowledge triples | `s?: Value, p?: Value, o?: Value, limit?: number` | `Promise<Triple[]>` |
| `loadDocument` | Load document | `doc: string, id?: string, metadata?: Triple[]` | `Promise<void>` |
| `loadText` | Load plain text | `text: string, id?: string, metadata?: Triple[]` | `Promise<void>` |

### API Factory Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `socket.librarian()` | Document library API | `LibrarianApi` |
| `socket.flows()` | Workflow management API | `FlowsApi` |
| `socket.flow(id)` | Specific flow API | `FlowApi` |
| `socket.knowledge()` | Knowledge graph API | `KnowledgeApi` |
| `socket.config()` | Configuration API | `ConfigApi` |

### State Management Stores

| Store | Description | Methods |
|-------|-------------|---------|
| `useChatStateStore` | Chat messages and mode | `addMessage, setInput, setChatMode` |
| `useSessionStore` | Session/workflow context | `setFlowId, setFlow` |
| `useSearchStateStore` | Search state | `setRows, setInput` |
| `useProgressStateStore` | Activity tracking | `addActivity, removeActivity, setError` |
| `useWorkbenchStateStore` | UI navigation | `setSelected, setTool, setEntities` |
| `useLoadStateStore` | Document upload state | `setTitle, setComments, setFiles` |

### Data Hooks

| Hook | Description | Returns |
|------|-------------|---------|
| `useLibrary` | Document library operations | `documents, uploadFiles, deleteDocuments` |
| `useFlows` | Workflow management | `flows, flowClasses, startFlow, stopFlows` |
| `useSchemas` | Schema management | `schemas, updateSchema, deleteSchema` |
| `useOntologies` | Ontology management | `ontologies, updateOntology` |
| `useKnowledgeCores` | Knowledge cores | `cores, uploadCore, downloadCore` |
| `usePrompts` | Prompt templates | `prompts, updatePrompt, systemPrompt` |
| `useTokenCosts` | Token pricing | `tokenCosts, updateTokenCost` |
| `useProcessing` | Processing status | `processing, isLoading` |
| `useTriples` | Triple queries | `triples, isLoading, error` |
| `useEntityDetail` | Entity details | `entity, relationships` |
| `useGraphSubgraph` | Graph visualization | `view, updateSubgraph` |

### Utility Hooks

| Hook | Description | Returns |
|------|-------------|---------|
| `useActivity` | Auto-track loading states | `void` |
| `useNotification` | Emit notifications | `success, error, warning, info` |
| `useSettings` | Settings management | `settings, updateSetting, exportSettings` |
| `useEmbeddings` | Generate embeddings | `embeddings, isLoading` |
| `useVectorSearch` | Vector similarity search | `query` |
| `useGraphEmbeddings` | Graph embedding search | `entities, isLoading` |

## Best Practices

### Error Handling

```typescript
// Always handle connection failures
const connectionState = useConnectionState()
if (connectionState.status === 'failed') {
  // Show error UI
}

// Handle API errors
try {
  const result = await socket.graphRag(query)
} catch (error) {
  notify.error(`Query failed: ${error.message}`)
}
```

### Activity Tracking

```typescript
// Automatically track loading states
function Component() {
  const query = useQuery(...)
  useActivity(query.isLoading, "Loading data")
}
```

### Type Safety

```typescript
import type { Triple, Value, Entity } from '@trustgraph/client'

// Use proper types for graph operations
const createTriple = (
  subject: string,
  predicate: string,
  object: string
): Triple => ({
  s: { v: subject, e: true },
  p: { v: predicate, e: false },
  o: { v: object, e: true }
})
```

### Performance

```typescript
// Use React Query for caching
const { data, isLoading } = useQuery({
  queryKey: ['entities', entityId],
  queryFn: () => fetchEntity(entityId),
  staleTime: 5 * 60 * 1000, // 5 minutes
})

// Batch operations when possible
const deleteMultiple = (ids: string[]) => {
  return Promise.all(ids.map(id => api.delete(id)))
}
```

## Migration Guide

If you're migrating from the old Chakra UI-based implementation:

1. **Replace UI components**: The library is now UI-agnostic
2. **Use providers**: Wrap your app with `SocketProvider` and `TrustGraphProvider`
3. **Update imports**: Import from `@trustgraph/client` subpaths
4. **Use hooks**: Replace direct API calls with hooks where available
5. **Handle notifications**: Implement your own notification UI using `useNotificationSubscription`

## Support

For issues, questions, or contributions:
- GitHub: [https://github.com/trustgraph-ai/trustgraph-client](https://github.com/trustgraph-ai/trustgraph-client)
- Documentation: [API Reference](./docs/api/README.md)