# TrustGraph Client Library Architecture Specification

## Overview

This document outlines the architectural transformation of the TrustGraph client codebase from a tightly-coupled Chakra UI application into a reusable, UI-agnostic client library for WebSocket communication and state management.

## Architectural Goals

### Primary Objectives

1. **UI Framework Independence**: Complete decoupling from Chakra UI and any other UI framework dependencies
2. **Reusable Client Library**: Transform into a standalone npm package that can be consumed by any React application
3. **State Management**: Maintain React-based state management using TanStack Query for server state
4. **WebSocket Communication**: Provide robust WebSocket client functionality with automatic reconnection and error handling
5. **Type Safety**: Full TypeScript support with exported types for consumer applications

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

### Core Modules to Preserve and Enhance

#### API Layer (`/api`)
- `authenticated-fetch.ts`: HTTP client wrapper
- `trustgraph/socket.ts`: WebSocket implementation
- `trustgraph/service-call*.ts`: RPC-style service invocation
- `trustgraph/messages.ts`: Message protocol definitions

#### State Management (`/state`)
- Query hooks and state stores
- Session management
- Real-time data synchronization

#### Data Models (`/model`)
- Type definitions (preserve `schemaTypes.ts`, `message.ts`, etc.)
- Remove UI table components

#### Utilities (`/utils`)
- Business logic utilities
- Data transformation functions
- Validation helpers

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

### Phase 1: Dependency Removal

1. **Remove Chakra UI Dependencies**
   - Delete all `*-table.tsx` files from `/model`
   - Remove any Chakra imports from remaining files
   - Extract pure business logic from UI components

2. **Isolate UI-Agnostic Code**
   - Identify and preserve core business logic
   - Remove any direct DOM manipulation
   - Eliminate style-related code

### Phase 2: API Design

1. **State Management Interface**
   ```typescript
   // Socket and connection state
   import { useSocket, useConnectionStatus } from '@trustgraph/client/state'
   
   // Domain-specific state management
   import { useFlows, useFlowMutation } from '@trustgraph/client/state'
   import { useKnowledgeCores } from '@trustgraph/client/state'
   import { useSchemas, useSchemaValidation } from '@trustgraph/client/state'
   import { useChat, useChatHistory } from '@trustgraph/client/state'
   
   // Service invocation
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

## Timeline Estimate

- **Phase 1**: 1-2 weeks - Dependency removal and code isolation
- **Phase 2**: 2-3 weeks - API design and implementation
- **Phase 3**: 2-3 weeks - State management refactoring
- **Phase 4**: 1 week - Build configuration and packaging
- **Documentation**: Ongoing throughout development
- **Testing**: Ongoing with dedicated week for integration tests

**Total Estimated Duration**: 6-9 weeks

## Appendix: File-by-File Migration Plan

### Files to Remove
- `/src/model/*-table.tsx` - All UI table components
- Any Chakra-specific utility files

### Files to Refactor
- `/src/api/trustgraph/*.ts` - Extract to core modules
- `/src/state/*.ts` - Convert to UI-agnostic hooks
- `/src/utils/*.ts` - Ensure no UI dependencies

### New Files to Create
- `/src/index.ts` - Public API surface
- `/src/state/index.ts` - Consolidated state management exports
- `/src/types/index.ts` - Type exports
- `/src/providers/TrustGraphProvider.tsx` - Main provider component