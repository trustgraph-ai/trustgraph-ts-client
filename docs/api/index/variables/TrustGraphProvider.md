[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / TrustGraphProvider

# Variable: TrustGraphProvider

> `const` **TrustGraphProvider**: `React.FC`\<[`TrustGraphProviderProps`](../interfaces/TrustGraphProviderProps.md)\>

Defined in: [src/providers/TrustGraphProvider.tsx:61](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/providers/TrustGraphProvider.tsx#L61)

Main provider component that sets up all necessary context for TrustGraph client

This provider combines:
- TanStack Query for server state management
- Socket provider for WebSocket connections
- Configuration context for client settings

## Example

```tsx
import { TrustGraphProvider } from '@trustgraph/client'

function App() {
  return (
    <TrustGraphProvider config={{
      socket: { url: 'wss://api.example.com' },
      devMode: true
    }}>
      <YourApp />
    </TrustGraphProvider>
  )
}
```
