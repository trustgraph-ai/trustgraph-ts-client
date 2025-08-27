[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / TrustGraphConfig

# Interface: TrustGraphConfig

Defined in: [src/providers/TrustGraphProvider.tsx:9](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/providers/TrustGraphProvider.tsx#L9)

Configuration options for the TrustGraph client

## Properties

### socket?

> `optional` **socket**: [`SocketConfig`](../../types/interfaces/SocketConfig.md)

Defined in: [src/providers/TrustGraphProvider.tsx:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/providers/TrustGraphProvider.tsx#L13)

Socket configuration for WebSocket connection

***

### queryClient?

> `optional` **queryClient**: `QueryClient`

Defined in: [src/providers/TrustGraphProvider.tsx:19](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/providers/TrustGraphProvider.tsx#L19)

Custom QueryClient instance for TanStack Query
If not provided, a default client will be created

***

### devMode?

> `optional` **devMode**: `boolean`

Defined in: [src/providers/TrustGraphProvider.tsx:26](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/providers/TrustGraphProvider.tsx#L26)

Enable development mode features
- Additional logging
- Development-only validations
