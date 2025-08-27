[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / ApiValue

# Interface: ApiValue

Defined in: [src/api/trustgraph/Triple.ts:5](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L5)

Represents a value in the TrustGraph knowledge graph

## Properties

### v

> **v**: `string`

Defined in: [src/api/trustgraph/Triple.ts:7](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L7)

The actual value/content

***

### e

> **e**: `boolean`

Defined in: [src/api/trustgraph/Triple.ts:9](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L9)

Whether this value represents an entity (true) or literal (false)

***

### label?

> `optional` **label**: `string`

Defined in: [src/api/trustgraph/Triple.ts:11](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L11)

Optional human-readable label for the value
