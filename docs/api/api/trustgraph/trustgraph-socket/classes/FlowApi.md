[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / FlowApi

# Class: FlowApi

Defined in: [src/api/trustgraph/trustgraph-socket.ts:963](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L963)

FlowApi - Interface for interacting with a specific flow instance
Provides flow-specific versions of core AI/ML operations

## Constructors

### Constructor

> **new FlowApi**(`api`, `flowId`): `FlowApi`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:967](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L967)

#### Parameters

##### api

[`BaseApi`](BaseApi.md)

##### flowId

`string`

#### Returns

`FlowApi`

## Methods

### textCompletion()

> **textCompletion**(`system`, `text`): `Promise`\<`string`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:975](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L975)

Performs text completion using AI models within this flow

#### Parameters

##### system

`string`

##### text

`string`

#### Returns

`Promise`\<`string`\>

***

### graphRag()

> **graphRag**(`text`, `options?`): `Promise`\<`string`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:993](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L993)

Performs Graph RAG (Retrieval Augmented Generation) query

#### Parameters

##### text

`string`

##### options?

[`GraphRagOptions`](../interfaces/GraphRagOptions.md)

#### Returns

`Promise`\<`string`\>

***

### agent()

> **agent**(`question`, `think`, `observe`, `answer`, `error`): `Promise`\<`unknown`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1014](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L1014)

Interacts with an AI agent that provides streaming responses

#### Parameters

##### question

`string`

##### think

(`s`) => `void`

##### observe

(`s`) => `void`

##### answer

(`s`) => `void`

##### error

(`s`) => `void`

#### Returns

`Promise`\<`unknown`\>

***

### embeddings()

> **embeddings**(`text`): `Promise`\<`number`[][]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1068](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L1068)

Generates embeddings for text within this flow

#### Parameters

##### text

`string`

#### Returns

`Promise`\<`number`[][]\>

***

### graphEmbeddingsQuery()

> **graphEmbeddingsQuery**(`vecs`, `limit`): `Promise`\<[`ApiValue`](../../../../index/interfaces/ApiValue.md)[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1085](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L1085)

Queries the knowledge graph using embedding vectors

#### Parameters

##### vecs

`number`[][]

##### limit

`undefined` | `number`

#### Returns

`Promise`\<[`ApiValue`](../../../../index/interfaces/ApiValue.md)[]\>

***

### triplesQuery()

> **triplesQuery**(`s?`, `p?`, `o?`, `limit?`): `Promise`\<[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1104](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L1104)

Queries knowledge graph triples (subject-predicate-object relationships)
All parameters are optional - omitted parameters act as wildcards

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

> **loadDocument**(`document`, `id?`, `metadata?`): `Promise`\<`void`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1124](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L1124)

Loads a document into this flow for processing

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

> **loadText**(`text`, `id?`, `metadata?`, `charset?`): `Promise`\<`void`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1145](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/trustgraph-socket.ts#L1145)

Loads plain text into this flow for processing

#### Parameters

##### text

`string`

##### id?

`string`

##### metadata?

[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]

##### charset?

`string`

#### Returns

`Promise`\<`void`\>
