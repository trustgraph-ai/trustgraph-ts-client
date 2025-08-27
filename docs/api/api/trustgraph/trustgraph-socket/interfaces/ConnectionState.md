[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / ConnectionState

# Interface: ConnectionState

Defined in: [src/api/trustgraph/trustgraph-socket.ts:150](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L150)

Connection state interface for UI consumption

## Properties

### status

> **status**: `"connecting"` \| `"connected"` \| `"reconnecting"` \| `"failed"` \| `"authenticated"` \| `"unauthenticated"`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:152](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L152)

Current connection status

***

### hasApiKey

> **hasApiKey**: `boolean`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:160](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L160)

Whether an API key is configured

***

### reconnectAttempt?

> `optional` **reconnectAttempt**: `number`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:162](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L162)

Current reconnection attempt number

***

### maxAttempts?

> `optional` **maxAttempts**: `number`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:164](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L164)

Maximum allowed attempts

***

### nextRetryIn?

> `optional` **nextRetryIn**: `number`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:166](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L166)

Seconds until next retry

***

### lastError?

> `optional` **lastError**: `string`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:168](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L168)

Last error message
