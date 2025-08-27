[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / BaseApi

# Class: BaseApi

Defined in: [src/api/trustgraph/trustgraph-socket.ts:177](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L177)

BaseApi - Core WebSocket client for TrustGraph API
Manages connection lifecycle, message routing, and provides base request functionality

## Constructors

### Constructor

> **new BaseApi**(`token?`): `BaseApi`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:193](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L193)

#### Parameters

##### token?

`string`

#### Returns

`BaseApi`

## Properties

### ws?

> `optional` **ws**: `WebSocket`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:178](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L178)

***

### tag

> **tag**: `string`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:179](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L179)

***

### id

> **id**: `number`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:180](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L180)

***

### token?

> `optional` **token**: `string`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:181](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L181)

***

### inflight

> **inflight**: `object` = `{}`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:182](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L182)

#### Index Signature

\[`key`: `string`\]: `ServiceCall`

***

### reconnectAttempts

> **reconnectAttempts**: `number` = `0`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:184](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L184)

***

### maxReconnectAttempts

> **maxReconnectAttempts**: `number` = `10`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:185](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L185)

***

### reconnectTimer?

> `optional` **reconnectTimer**: `Timeout`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:186](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L186)

***

### reconnectionState

> **reconnectionState**: `"reconnecting"` \| `"failed"` \| `"idle"` = `"idle"`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:187](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L187)

## Methods

### onConnectionStateChange()

> **onConnectionStateChange**(`listener`): () => `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:209](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L209)

Subscribe to connection state changes for UI updates

#### Parameters

##### listener

(`state`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### openSocket()

> **openSocket**(): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:280](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L280)

Establishes WebSocket connection and sets up event handlers

#### Returns

`void`

***

### onMessage()

> **onMessage**(`message`): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:329](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L329)

#### Parameters

##### message

`MessageEvent`

#### Returns

`void`

***

### onClose()

> **onClose**(`event`): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:348](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L348)

#### Parameters

##### event

`CloseEvent`

#### Returns

`void`

***

### onOpen()

> **onOpen**(): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:357](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L357)

#### Returns

`void`

***

### onError()

> **onError**(`event`): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:374](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L374)

#### Parameters

##### event

`Event`

#### Returns

`void`

***

### scheduleReconnect()

> **scheduleReconnect**(): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:383](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L383)

Schedules a reconnection attempt with exponential backoff

#### Returns

`void`

***

### reopen()

> **reopen**(): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:429](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L429)

Reopens the WebSocket connection (used after connection failures)

#### Returns

`void`

***

### close()

> **close**(): `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:445](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L445)

Closes the WebSocket connection and cleans up

#### Returns

`void`

***

### getNextId()

> **getNextId**(): `string`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:475](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L475)

Generates the next unique message ID for requests
Format: {clientTag}-{incrementingNumber}

#### Returns

`string`

***

### makeRequest()

> **makeRequest**\<`RequestType`, `ResponseType`\>(`service`, `request`, `timeout?`, `retries?`, `flow?`): `Promise`\<`ResponseType`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:490](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L490)

Core method for making service requests over WebSocket

#### Type Parameters

##### RequestType

`RequestType`

##### ResponseType

`ResponseType`

#### Parameters

##### service

`string`

Name of the service to call

##### request

`RequestType`

Request payload

##### timeout?

`number`

Request timeout in milliseconds (default: 10000)

##### retries?

`number`

Number of retry attempts (default: 3)

##### flow?

`string`

Optional flow identifier

#### Returns

`Promise`\<`ResponseType`\>

Promise resolving to the service response

***

### makeRequestMulti()

> **makeRequestMulti**\<`RequestType`, `ResponseType`\>(`service`, `request`, `receiver`, `timeout?`, `retries?`, `flow?`): `Promise`\<`ResponseType`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:537](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L537)

Makes a request that can receive multiple responses (streaming)
Used for operations that return data in chunks

#### Type Parameters

##### RequestType

`RequestType`

##### ResponseType

`ResponseType`

#### Parameters

##### service

`string`

##### request

`RequestType`

##### receiver

(`response`) => `boolean`

##### timeout?

`number`

##### retries?

`number`

##### flow?

`string`

#### Returns

`Promise`\<`ResponseType`\>

***

### makeFlowRequest()

> **makeFlowRequest**\<`RequestType`, `ResponseType`\>(`service`, `request`, `timeout?`, `retries?`, `flow?`): `Promise`\<`ResponseType`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:582](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L582)

Convenience method for making flow-specific requests
Defaults to "default" flow if none specified

#### Type Parameters

##### RequestType

`RequestType`

##### ResponseType

`ResponseType`

#### Parameters

##### service

`string`

##### request

`RequestType`

##### timeout?

`number`

##### retries?

`number`

##### flow?

`string`

#### Returns

`Promise`\<`ResponseType`\>

***

### librarian()

> **librarian**(): [`LibrarianApi`](LibrarianApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:603](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L603)

Create LibrarianApi for document management

#### Returns

[`LibrarianApi`](LibrarianApi.md)

***

### flows()

> **flows**(): [`FlowsApi`](FlowsApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:608](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L608)

Create FlowsApi for workflow management

#### Returns

[`FlowsApi`](FlowsApi.md)

***

### flow()

> **flow**(`id`): [`FlowApi`](FlowApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:613](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L613)

Create FlowApi for specific workflow instance

#### Parameters

##### id

`string`

#### Returns

[`FlowApi`](FlowApi.md)

***

### knowledge()

> **knowledge**(): [`KnowledgeApi`](KnowledgeApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:618](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L618)

Create KnowledgeApi for knowledge graph operations

#### Returns

[`KnowledgeApi`](KnowledgeApi.md)

***

### config()

> **config**(): [`ConfigApi`](ConfigApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:623](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/trustgraph-socket.ts#L623)

Create ConfigApi for system configuration

#### Returns

[`ConfigApi`](ConfigApi.md)
