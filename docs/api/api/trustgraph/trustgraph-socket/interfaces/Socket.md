[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / Socket

# Interface: Socket

Defined in: [src/api/trustgraph/trustgraph-socket.ts:67](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L67)

Socket interface defining all available operations for the TrustGraph API
This provides a unified interface for various AI/ML and knowledge graph operations

## Properties

### close()

> **close**: () => `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:69](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L69)

Close the WebSocket connection

#### Returns

`void`

***

### textCompletion()

> **textCompletion**: (`system`, `text`) => `Promise`\<`string`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:72](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L72)

Text completion using AI models

#### Parameters

##### system

`string`

##### text

`string`

#### Returns

`Promise`\<`string`\>

***

### graphRag()

> **graphRag**: (`text`, `options?`) => `Promise`\<`string`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:75](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L75)

Graph-based Retrieval Augmented Generation

#### Parameters

##### text

`string`

##### options?

[`GraphRagOptions`](GraphRagOptions.md)

#### Returns

`Promise`\<`string`\>

***

### agent()

> **agent**: (`question`, `think`, `observe`, `answer`, `error`) => `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:78](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L78)

Agent interaction with streaming callbacks for different phases

#### Parameters

##### question

`string`

##### think

(`t`) => `void`

##### observe

(`t`) => `void`

##### answer

(`t`) => `void`

##### error

(`e`) => `void`

#### Returns

`void`

***

### embeddings()

> **embeddings**: (`text`) => `Promise`\<`number`[][]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:87](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L87)

Generate embeddings for text

#### Parameters

##### text

`string`

#### Returns

`Promise`\<`number`[][]\>

***

### graphEmbeddingsQuery()

> **graphEmbeddingsQuery**: (`vecs`, `limit`) => `Promise`\<[`ApiValue`](../../../../index/interfaces/ApiValue.md)[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:90](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L90)

Query graph using embedding vectors

#### Parameters

##### vecs

`number`[][]

##### limit

`number`

#### Returns

`Promise`\<[`ApiValue`](../../../../index/interfaces/ApiValue.md)[]\>

***

### triplesQuery()

> **triplesQuery**: (`s?`, `p?`, `o?`, `limit?`) => `Promise`\<[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:93](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L93)

Query knowledge graph triples (subject-predicate-object)

#### Parameters

##### s?

[`ApiValue`](../../../../index/interfaces/ApiValue.md)

##### p?

[`ApiValue`](../../../../index/interfaces/ApiValue.md)

##### o?

[`ApiValue`](../../../../index/interfaces/ApiValue.md)

##### limit?

`number`

#### Returns

`Promise`\<[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]\>

***

### loadDocument()

> **loadDocument**: (`document`, `id?`, `metadata?`) => `Promise`\<`void`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:101](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L101)

Load a document into the system

#### Parameters

##### document

`string`

##### id?

`string`

##### metadata?

[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]

#### Returns

`Promise`\<`void`\>

***

### loadText()

> **loadText**: (`text`, `id?`, `metadata?`) => `Promise`\<`void`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:108](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L108)

Load plain text into the system

#### Parameters

##### text

`string`

##### id?

`string`

##### metadata?

[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]

#### Returns

`Promise`\<`void`\>

***

### loadLibraryDocument()

> **loadLibraryDocument**: (`document`, `mimeType`, `id?`, `metadata?`) => `Promise`\<`void`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:111](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L111)

Load a document into the library with full metadata

#### Parameters

##### document

`string`

##### mimeType

`string`

##### id?

`string`

##### metadata?

[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]

#### Returns

`Promise`\<`void`\>

***

### onConnectionStateChange()

> **onConnectionStateChange**: (`listener`) => () => `void`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:119](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L119)

Connection state management

#### Parameters

##### listener

(`state`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### librarian()

> **librarian**: () => [`LibrarianApi`](../classes/LibrarianApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:122](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L122)

API factory methods

#### Returns

[`LibrarianApi`](../classes/LibrarianApi.md)

***

### flows()

> **flows**: () => [`FlowsApi`](../classes/FlowsApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:123](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L123)

#### Returns

[`FlowsApi`](../classes/FlowsApi.md)

***

### flow()

> **flow**: (`id`) => [`FlowApi`](../classes/FlowApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:124](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L124)

#### Parameters

##### id

`string`

#### Returns

[`FlowApi`](../classes/FlowApi.md)

***

### knowledge()

> **knowledge**: () => [`KnowledgeApi`](../classes/KnowledgeApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:125](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L125)

#### Returns

[`KnowledgeApi`](../classes/KnowledgeApi.md)

***

### config()

> **config**: () => [`ConfigApi`](../classes/ConfigApi.md)

Defined in: [src/api/trustgraph/trustgraph-socket.ts:126](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/api/trustgraph/trustgraph-socket.ts#L126)

#### Returns

[`ConfigApi`](../classes/ConfigApi.md)
