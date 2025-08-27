[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / SocketProvider

# Variable: SocketProvider

> `const` **SocketProvider**: `React.FC`\<`SocketProviderProps`\>

Defined in: [src/api/trustgraph/SocketProvider.tsx:78](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/api/trustgraph/SocketProvider.tsx#L78)

SocketProvider - Manages WebSocket connection with authentication

Critical requirements:
1. Wait for settings to load before creating socket
2. Create socket with token if apiKey is present
3. Reconnect when authentication settings change
