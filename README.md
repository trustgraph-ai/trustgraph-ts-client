# @trustgraph/client

A UI-agnostic TrustGraph client library for WebSocket communication and state management.

## Status: In Development

This package is currently under development as part of migrating the TrustGraph client from a Chakra UI application to a reusable, framework-agnostic library.

## Package Structure

- **`@trustgraph/client`** - Main entry point
- **`@trustgraph/client/state`** - State management hooks and stores
- **`@trustgraph/client/providers`** - React context providers
- **`@trustgraph/client/types`** - TypeScript type definitions
- **`@trustgraph/client/tables`** - Table definitions (coming soon - UI-agnostic format)

## Installation

```bash
npm install @trustgraph/client
```

## Basic Usage

### State Management
```typescript
import { useSessionStore, SocketProvider } from '@trustgraph/client'

// Use state management
const sessionStore = useSessionStore()

// Wrap your app with the socket provider
<SocketProvider>
  <YourApp />
</SocketProvider>
```

### UI-Agnostic Tables
```typescript
import { tokenCostColumns, promptColumns, type TableRenderers } from '@trustgraph/client/tables'

// Option 1: Use without renderers (plain text)
const columns = tokenCostColumns

// Option 2: Use with custom renderers for your UI framework
const renderers: TableRenderers = {
  code: (value) => <YourCodeComponent>{value}</YourCodeComponent>,
  tag: (value) => <YourTagComponent>{value}</YourTagComponent>
}

const columnsWithRenderers = promptColumns(renderers)

// Use with any table component (TanStack Table, MUI DataGrid, etc.)
<YourTableComponent columns={columns} data={data} />
```

## Development Status

✅ **Completed:**
- Package configuration and build setup
- State management exports (50+ hooks and stores)  
- Basic TypeScript configuration
- CommonJS and ES modules support
- Core API structure
- UI-agnostic table definitions (7/13 tables migrated)
  - ✅ tokenCostColumns, ontologyColumns, mcpToolColumns, agentToolColumns
  - ✅ promptColumns (with renderer support), flowClassColumns, nodePropertyColumns

🚧 **In Progress:**
- UI-agnostic table definitions
- Event-based notification system
- Complete TypeScript declarations

📝 **Planned:**
- Full migration from Chakra UI dependencies
- Comprehensive documentation
- Usage examples
- Migration guide from original codebase

## Build

```bash
npm run build      # Build for production
npm run dev        # Build in watch mode
npm run type-check # TypeScript validation
npm run lint       # ESLint validation
```

## Dependencies

### Runtime Dependencies
- `@tanstack/react-query` - Server state management
- `@tanstack/react-table` - Table functionality (will be UI-agnostic)
- `zustand` - Client state management
- `uuid` - UUID generation
- `compute-cosine-similarity` - Vector similarity calculations

### Peer Dependencies
- `react` ^16.8.0 || ^17.0.0 || ^18.0.0
- `react-dom` ^16.8.0 || ^17.0.0 || ^18.0.0

## Architecture

This library follows a layered architecture:

1. **Core Services** - WebSocket management, message protocol, authentication
2. **State Management** - TanStack Query integration and Zustand stores
3. **Public API** - React hooks and providers for consumer applications

See `docs/tech-spec/architecture.md` for detailed architectural documentation.

## License

MIT