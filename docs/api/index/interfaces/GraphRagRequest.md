[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / GraphRagRequest

# Interface: GraphRagRequest

Defined in: [src/api/trustgraph/messages.ts:108](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/api/trustgraph/messages.ts#L108)

Request for Graph-based Retrieval Augmented Generation

## Properties

### query

> **query**: `string`

Defined in: [src/api/trustgraph/messages.ts:110](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/api/trustgraph/messages.ts#L110)

Query text

***

### entity-limit?

> `optional` **entity-limit**: `number`

Defined in: [src/api/trustgraph/messages.ts:112](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/api/trustgraph/messages.ts#L112)

Maximum entities to retrieve (default: 50)

***

### triple-limit?

> `optional` **triple-limit**: `number`

Defined in: [src/api/trustgraph/messages.ts:114](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/api/trustgraph/messages.ts#L114)

Maximum triples to retrieve (default: 30)

***

### max-subgraph-size?

> `optional` **max-subgraph-size**: `number`

Defined in: [src/api/trustgraph/messages.ts:116](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/api/trustgraph/messages.ts#L116)

Maximum subgraph size (default: 1000)

***

### max-path-length?

> `optional` **max-path-length**: `number`

Defined in: [src/api/trustgraph/messages.ts:118](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/api/trustgraph/messages.ts#L118)

Maximum path length for traversal (default: 2)
