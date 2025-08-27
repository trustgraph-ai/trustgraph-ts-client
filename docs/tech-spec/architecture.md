# TrustGraph Client Library Architecture Specification

## Overview

This document outlines the minimal architectural transformation of the TrustGraph client codebase from a tightly-coupled Chakra UI application into a reusable, UI-agnostic client library for WebSocket communication and state management. The emphasis is on preserving the stable, battle-tested WebSocket and state management APIs while only removing direct UI dependencies.

## Architectural Goals

### Primary Objectives

1. **UI Framework Independence**: Complete decoupling from Chakra UI and any other UI framework dependencies
2. **Reusable Client Library**: Transform into a standalone npm package that can be consumed by any React application
3. **State Management**: Maintain React-based state management using TanStack Query for server state
4. **WebSocket Communication**: Provide robust WebSocket client functionality with automatic reconnection and error handling
5. **Type Safety**: Full TypeScript support with exported types for consumer applications
6. **Minimal Refactoring**: Preserve existing state and WebSocket APIs that are battle-tested and stable

### Design Principles

- **Separation of Concerns**: Clear boundaries between communication, state, and presentation layers
- **Composability**: Modular architecture allowing selective imports of functionality
- **Developer Experience**: Simple API surface with sensible defaults and progressive disclosure of complexity
- **Performance**: Efficient state updates and minimal re-renders through proper memoization
- **Testability**: Easily testable components with minimal mocking requirements

## Current Architecture Analysis

### Identified Dependencies to Remove

1. **UI Components** (`*-table.tsx` files in `/model`): These contain Chakra-specific table implementations
2. **UI Utilities**: Any direct imports from `@chakra-ui/*`
3. **Presentation Logic**: Components that mix business logic with UI rendering
4. **Notification System** (`/state/notify.ts`): Currently integrated with Chakra's toast component - needs refactoring to event-based system

### Core Modules to Preserve (Minimal Changes)

#### API Layer (`/api`) - **PRESERVE AS-IS**
- `authenticated-fetch.ts`: HTTP client wrapper ✓
- `trustgraph/socket.ts`: WebSocket implementation ✓
- `trustgraph/service-call*.ts`: RPC-style service invocation ✓
- `trustgraph/messages.ts`: Message protocol definitions ✓
- **Status**: These are stable and battle-tested - minimal changes needed

#### State Management (`/state`) - **PRESERVE CORE LOGIC**
- Query hooks and state stores ✓
- Session management ✓
- Real-time data synchronization ✓
- **Changes needed**: Only remove direct UI dependencies (toast notifications)

#### Data Models (`/model`)
- Type definitions (preserve `schemaTypes.ts`, `message.ts`, etc.) ✓
- **Remove only**: UI table components (`*-table.tsx`)

#### Utilities (`/utils`) - **PRESERVE AS-IS**
- Business logic utilities ✓
- Data transformation functions ✓
- Validation helpers ✓
- **Status**: Generally UI-agnostic already

## Proposed Architecture

### Layer Structure

```
┌─────────────────────────────────────────┐
│         Consumer Application            │
│     (React + Any UI Framework)          │
└─────────────────────────────────────────┘
                    ▲
                    │ Imports
                    │
┌─────────────────────────────────────────┐
│      TrustGraph Client Library          │
├─────────────────────────────────────────┤
│  Public API Surface                     │
│  - Hooks (useSocket, useQuery, etc.)    │
│  - Providers (SocketProvider)           │
│  - Types & Interfaces                   │
├─────────────────────────────────────────┤
│  Core Services                          │
│  - WebSocket Manager                    │
│  - State Synchronization                │
│  - Message Queue                        │
├─────────────────────────────────────────┤
│  Data Layer                             │
│  - TanStack Query Integration           │
│  - Local State Stores                   │
│  - Cache Management                     │
└─────────────────────────────────────────┘
```

### Module Organization

```
trustgraph-client/
├── src/
│   ├── core/                 # Core functionality
│   │   ├── socket/           # WebSocket management
│   │   ├── messaging/        # Message protocol
│   │   └── auth/             # Authentication
│   ├── state/                # State management (hooks, stores, queries)
│   │   ├── socket.ts         # Socket connection state
│   │   ├── session.ts        # Session management
│   │   ├── flows.ts          # Flows state and queries
│   │   ├── knowledge.ts      # Knowledge cores state
│   │   ├── schemas.ts        # Schema management
│   │   ├── chat.ts           # Chat state and operations
│   │   └── index.ts          # State exports
│   ├── tables/               # UI-agnostic table definitions
│   │   ├── document.ts       # Document table schema
│   │   ├── flows.ts          # Flow table schema
│   │   ├── schemas.ts        # Schema table schema
│   │   ├── renderers.ts      # Renderer interface
│   │   └── index.ts          # Table exports
│   ├── providers/            # React context providers
│   │   └── TrustGraphProvider.tsx
│   ├── types/                # TypeScript definitions
│   │   ├── api.ts
│   │   ├── models.ts
│   │   └── events.ts
│   ├── utils/                # Pure utility functions
│   └── index.ts              # Public API exports
├── dist/                     # Built output
└── package.json
```

## Rework Requirements

### Phase 1: Minimal Dependency Removal

1. **Surgical Chakra UI Removal**
   - Delete all `*-table.tsx` files from `/model`
   - Remove Chakra imports ONLY where necessary
   - Keep all core business logic intact

2. **Preserve Existing Architecture**
   - Maintain current file structure where possible
   - Keep existing function signatures and APIs
   - Only refactor what directly depends on UI frameworks

### Phase 2: API Preservation & Packaging

1. **Export Existing APIs**
   ```typescript
   // Preserve existing state hooks exactly as they are
   import { useSocket, useConnectionStatus } from '@trustgraph/client/state'
   
   // Keep current API signatures unchanged
   import { useFlows, useFlowMutation } from '@trustgraph/client/state'
   import { useKnowledgeCores } from '@trustgraph/client/state'
   import { useSchemas, useSchemaValidation } from '@trustgraph/client/state'
   import { useChat, useChatHistory } from '@trustgraph/client/state'
   
   // Existing service invocation patterns remain the same
   import { useServiceCall } from '@trustgraph/client/state'
   ```

2. **Provider Pattern**
   ```typescript
   <TrustGraphProvider config={config}>
     <App />
   </TrustGraphProvider>
   ```

3. **Event System**
   ```typescript
   // Event emitter for real-time updates
   client.on('message', handler)
   client.on('connected', handler)
   client.on('error', handler)
   ```

4. **Notification System**
   ```typescript
   // Flexible notification system - consumers choose implementation
   import { useNotifications } from '@trustgraph/client/state'
   
   const { notifications, subscribe, clear } = useNotifications()
   
   // Consumer can:
   // 1. Display in UI (toast, modal, etc.)
   // 2. Log to console
   // 3. Ignore entirely (server-side usage)
   
   // Subscribe to notification events
   const unsubscribe = subscribe((notification) => {
     console.log(notification)
     // or: showToast(notification)
     // or: customHandler(notification)
   })
   ```

### Phase 3: State Management

1. **TanStack Query Integration**
   - Server state management for REST endpoints
   - Optimistic updates for real-time operations
   - Cache invalidation strategies

2. **Local State Stores**
   - Zustand or Context API for client state
   - Session management
   - Connection status

3. **Real-time Synchronization**
   - WebSocket message handling
   - State reconciliation
   - Conflict resolution

### Phase 4: Build Configuration

1. **Package Configuration**
   ```json
   {
     "name": "@trustgraph/client",
     "main": "dist/index.js",
     "types": "dist/index.d.ts",
     "exports": {
       ".": "./dist/index.js",
       "./state": "./dist/state/index.js",
       "./tables": "./dist/tables/index.js",
       "./types": "./dist/types/index.js",
       "./providers": "./dist/providers/index.js"
     }
   }
   ```

2. **Build Process**
   - TypeScript compilation
   - Tree-shaking support
   - ESM and CommonJS outputs
   - Source maps

## Migration Path

### For Existing Consumers

1. **Gradual Migration**
   - Maintain backward compatibility during transition
   - Provide migration guide
   - Deprecation warnings for removed features

2. **Adapter Pattern**
   ```typescript
   // Temporary adapter for Chakra UI tables
   import { useFlows } from '@trustgraph/client'
   import { FlowsTable } from './legacy/FlowsTable'
   
   function FlowsView() {
     const flows = useFlows()
     return <FlowsTable data={flows} />
   }
   ```

## Testing Strategy

1. **Unit Tests**
   - Pure functions in utils
   - Hook behavior with React Testing Library
   - Message protocol validation

2. **Integration Tests**
   - WebSocket connection lifecycle
   - State synchronization
   - Error recovery

3. **Mock Server**
   - Provide mock WebSocket server for testing
   - Fixture data for common scenarios

## Documentation Requirements

1. **API Reference**
   - Auto-generated from TypeScript definitions
   - Usage examples for each hook

2. **Integration Guides**
   - Next.js integration
   - Vite integration
   - Create React App integration
   - State management patterns

3. **Migration Guide**
   - Step-by-step migration from current architecture
   - Common patterns and anti-patterns

## Performance Considerations

1. **Bundle Size**
   - Target < 50KB gzipped for core functionality
   - Optional features as separate imports

2. **Runtime Performance**
   - Memoization of expensive computations
   - Efficient re-render strategies
   - WebSocket message batching

## Security Considerations

1. **Authentication**
   - Token refresh mechanism
   - Secure storage recommendations

2. **Data Validation**
   - Input sanitization
   - Schema validation for messages

3. **Error Handling**
   - No sensitive data in error messages
   - Proper error boundaries

## Success Metrics

1. **Technical Metrics**
   - Zero UI framework dependencies
   - 100% TypeScript coverage
   - > 80% test coverage

2. **Developer Experience**
   - Time to first successful integration < 30 minutes
   - Clear error messages
   - Comprehensive IntelliSense support

## Timeline Estimate (Revised for Minimal Rework)

- **Phase 1**: 3-5 days - Surgical removal of UI dependencies only
- **Phase 2**: 3-5 days - Table transformation to UI-agnostic format
- **Phase 3**: 1-2 days - Notification system refactor
- **Phase 4**: 2-3 days - Package configuration and exports
- **Phase 5**: 2-3 days - Build configuration and packaging
- **Documentation**: 2-3 days - API documentation and migration guide
- **Testing**: 2-3 days - Verify existing tests still pass

**Total Estimated Duration**: 3-4 weeks (includes table preservation strategy)

## Appendix: File-by-File Migration Plan

### Files to Transform (Not Remove)
- `/src/model/*-table.tsx` - Convert to UI-agnostic table definitions (see Table Strategy below)
- Any Chakra-specific utility files - Remove

### Files Requiring Minimal Changes
- `/src/api/trustgraph/*.ts` - Keep as-is, just repackage
- `/src/state/*.ts` - Remove UI imports only, preserve all logic
- `/src/state/notify.ts` - Refactor from toast integration to event-based notification system
- `/src/utils/*.ts` - Likely no changes needed

### New Files to Create
- `/src/index.ts` - Public API surface
- `/src/state/index.ts` - Consolidated state management exports
- `/src/tables/index.ts` - Table schema exports
- `/src/tables/renderers.ts` - UI renderer interface
- `/src/types/index.ts` - Type exports
- `/src/providers/TrustGraphProvider.tsx` - Main provider component

## Table Strategy Recommendation

### Keep the Tables, But Transform Them

**Rationale**: The table definitions contain valuable business logic and domain knowledge that should be preserved. They define:
- Rich data structures for documents, flows, schemas, ontologies
- Complex field relationships and metadata
- Consistent data formatting patterns
- Type-safe column definitions using TanStack Table

**The Problem**: Currently tightly coupled to Chakra UI components (Badge, Tag, Checkbox, etc.)

**The Solution**: Convert to UI-agnostic table schemas with render props

### Proposed Table Architecture

```typescript
// Instead of this (current):
export function documentColumns() {
  return [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: info => <Tag>{info.getValue()}</Tag> // ❌ Chakra dependency
    })
  ]
}

// Convert to this (proposed):
export function documentColumns() {
  return [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: info => ({
        type: 'tag',
        value: info.getValue(),
        // Let consumer decide how to render
      })
    })
  ]
}

// Or with render props:
export function documentColumns(renderers?: TableRenderers) {
  return [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: info => renderers?.tag ? 
        renderers.tag(info.getValue()) : 
        info.getValue()
    })
  ]
}
```

### Implementation Approach

1. **Extract Render Patterns**: Identify common UI patterns across tables:
   - Tags/Badges (used in 7 tables)
   - Checkboxes (used in 3 tables)
   - Code blocks (used in 2 tables)
   - Directional arrows (node relationships)

2. **Create Renderer Interface**:
   ```typescript
   interface TableRenderers {
     tag?: (value: string, color?: string) => ReactNode
     checkbox?: (checked: boolean, onChange: () => void) => ReactNode
     code?: (value: string) => ReactNode
     badge?: (items: string[]) => ReactNode
   }
   ```

3. **Preserve Business Logic**: Keep all the valuable parts:
   - Column accessors and data transformation
   - Sorting/filtering logic
   - Selection state management
   - Type definitions and validation

### Migration Priority

**Easy Wins** (already UI-agnostic):
- `token-costs-table.tsx` - No UI components
- `ontologies-table.tsx` - No UI components
- `mcp-tools-table.tsx` - No UI components
- `agent-tools-table.tsx` - No UI components

**Simple Conversions**:
- `prompts-table.tsx` - Only uses Code component
- `flow-classes-table.tsx` - Only uses Text component

**Complex Conversions**:
- `schemas-table.tsx` - Multiple badges and layout components
- `document-table.tsx` - Tags and checkboxes
- `node-relationships-table.tsx` - Custom styled buttons

### Benefits of This Approach

1. **Preserves Investment**: Keeps valuable business logic and domain models
2. **Consumer Flexibility**: Apps can render with Chakra, MUI, Ant Design, or plain HTML
3. **Type Safety**: Maintains TanStack Table's type-safe column definitions
4. **Progressive Migration**: Can convert tables incrementally
5. **Documentation Value**: Table definitions serve as documentation of data structures

### Example Consumer Usage

```typescript
import { documentColumns, TableRenderers } from '@trustgraph/client/tables'
import { Badge, Checkbox } from '@mui/material' // Or any UI library

const renderers: TableRenderers = {
  tag: (value) => <Badge>{value}</Badge>,
  checkbox: (checked, onChange) => 
    <Checkbox checked={checked} onChange={onChange} />
}

const columns = documentColumns(renderers)
// Use with any table component (MUI DataGrid, AG-Grid, etc.)
```

**Recommendation**: Keep and transform the tables. The domain logic is too valuable to discard, and the conversion effort (3-5 days) is justified by the reusability benefits.