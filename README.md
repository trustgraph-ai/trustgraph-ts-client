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
import { 
  tokenCostColumns, 
  promptColumns, 
  documentColumns,
  schemaColumns,
  type TableRenderers 
} from '@trustgraph/client/tables'

// Option 1: Simple tables (no renderers needed)
const tokenColumns = tokenCostColumns

// Option 2: Tables with custom renderers for your UI framework
const renderers: TableRenderers = {
  code: (value) => <YourCodeComponent>{value}</YourCodeComponent>,
  badge: (items) => items.map(item => <YourBadge key={item}>{item}</YourBadge>),
  checkbox: (checked, onChange, indeterminate) => (
    <YourCheckbox 
      checked={checked} 
      onChange={onChange} 
      indeterminate={indeterminate === 'indeterminate'} 
    />
  ),
  button: (label, onClick, variant) => (
    <YourButton variant={variant} onClick={onClick}>{label}</YourButton>
  )
}

// Complex tables with full renderer support
const docColumns = documentColumns(renderers) // Selection, tags, timestamps
const codeColumns = promptColumns(renderers)  // Code syntax highlighting
const dataColumns = schemaColumns(renderers)  // Field badges, type indicators

// Use with any table component (TanStack Table, MUI DataGrid, AG-Grid, etc.)
<YourTableComponent columns={docColumns} data={documents} />
```

### Event-Based Notifications
```typescript
import { 
  useNotification, 
  useNotificationSubscription, 
  useNotificationState 
} from '@trustgraph/client/state'

// Emit notifications from anywhere in your app
function MyComponent() {
  const notification = useNotification()
  
  const handleAction = () => {
    notification.success('Action completed successfully!')
    notification.error('Something went wrong', { duration: 10000 })
    notification.warning('This is a warning')
    notification.info('FYI: Something happened')
  }
}

// Subscribe to notifications in your UI layer
function NotificationProvider({ children }) {
  useNotificationSubscription((notification) => {
    // Handle with your UI framework of choice
    if (notification.type === 'success') {
      showToast(notification.message, { type: 'success' })
    } else if (notification.type === 'error') {
      showErrorModal(notification.message)
    }
    // Or log to console for server-side apps
    console.log(`[${notification.type}]`, notification.message)
  })
  
  return <>{children}</>
}

// Monitor notification state (useful for notification centers)
function NotificationCenter() {
  const { notifications, hasActiveListeners } = useNotificationState()
  
  return (
    <div>
      <p>Active listeners: {hasActiveListeners ? 'Yes' : 'No'}</p>
      <p>Recent notifications: {notifications.length}</p>
    </div>
  )
}
```

## Development Status

✅ **Completed:**
- Package configuration and build setup
- State management exports (50+ hooks and stores)  
- Basic TypeScript configuration
- CommonJS and ES modules support
- Core API structure
- ✅ **UI-agnostic table definitions (13/13 tables migrated)**
  - **Simple tables**: tokenCostColumns, ontologyColumns, mcpToolColumns, agentToolColumns, nodePropertyColumns
  - **Renderer tables**: promptColumns, flowClassColumns (support custom code/text renderers)
  - **Complex tables**: processingColumns, schemaColumns, nodeRelationshipColumns, documentColumns, flowColumns, knowledgeCoreColumns (support badges, checkboxes, buttons)
- ✅ **Event-based notification system**
  - Pub/sub architecture with `useNotificationSubscription`
  - History tracking with `useNotificationState`
  - Framework-agnostic notification emission
  - Auto-dismissal and manual control

🚧 **In Progress:**
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