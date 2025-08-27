[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / ApiTriple

# Interface: ApiTriple

Defined in: [src/api/trustgraph/Triple.ts:32](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L32)

Represents a complete RDF triple (subject-predicate-object)
The fundamental unit of knowledge in the TrustGraph system

## Properties

### s

> **s**: [`ApiValue`](ApiValue.md)

Defined in: [src/api/trustgraph/Triple.ts:34](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L34)

Subject - what the statement is about

***

### p

> **p**: [`ApiValue`](ApiValue.md)

Defined in: [src/api/trustgraph/Triple.ts:36](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L36)

Predicate - the relationship or property

***

### o

> **o**: [`ApiValue`](ApiValue.md)

Defined in: [src/api/trustgraph/Triple.ts:38](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L38)

Object - the value or target of the relationship

***

### direc?

> `optional` **direc**: `string`

Defined in: [src/api/trustgraph/Triple.ts:40](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/api/trustgraph/Triple.ts#L40)

Optional direction indicator for graph traversal
