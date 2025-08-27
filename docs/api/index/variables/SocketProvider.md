[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / SocketProvider

# Variable: SocketProvider

> `const` **SocketProvider**: `React.FC`\<`SocketProviderProps`\>

Defined in: [src/api/trustgraph/SocketProvider.tsx:55](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/SocketProvider.tsx#L55)

SocketProvider - Manages WebSocket connection with authentication

Critical requirements:
1. Wait for settings to load before creating socket
2. Create socket with token if apiKey is present
3. Reconnect when authentication settings change
