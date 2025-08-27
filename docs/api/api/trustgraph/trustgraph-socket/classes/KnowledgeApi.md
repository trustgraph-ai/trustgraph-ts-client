[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / KnowledgeApi

# Class: KnowledgeApi

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1333](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1333)

KnowledgeApi - Manages knowledge graph cores and data
Knowledge cores appear to be collections of processed knowledge graph data

## Constructors

### Constructor

> **new KnowledgeApi**(`api`): `KnowledgeApi`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1336](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1336)

#### Parameters

##### api

[`BaseApi`](BaseApi.md)

#### Returns

`KnowledgeApi`

## Methods

### getKnowledgeCores()

> **getKnowledgeCores**(): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1343](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1343)

Retrieves list of available knowledge graph cores

#### Returns

`Promise`\<`any`\>

***

### deleteKgCore()

> **deleteKgCore**(`id`, `user?`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1359](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1359)

Deletes a knowledge graph core

#### Parameters

##### id

`string`

##### user?

`string`

#### Returns

`Promise`\<`any`\>

***

### loadKgCore()

> **loadKgCore**(`id`, `flow`, `user?`, `collection?`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1374](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1374)

Deletes a knowledge graph core

#### Parameters

##### id

`string`

##### flow

`string`

##### user?

`string`

##### collection?

`string`

#### Returns

`Promise`\<`any`\>

***

### getKgCore()

> **getKgCore**(`id`, `receiver`, `user?`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1393](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1393)

Retrieves a knowledge graph core with streaming data
Uses multi-request pattern for large datasets

#### Parameters

##### id

`string`

##### receiver

(`msg`, `isEnd`) => `void`

Callback function to handle streaming data chunks

##### user?

`string`

#### Returns

`Promise`\<`any`\>
