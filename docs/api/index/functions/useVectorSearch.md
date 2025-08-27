[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useVectorSearch

# Function: useVectorSearch()

> **useVectorSearch**(): `object`

Defined in: [src/state/vector-search.ts:14](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/vector-search.ts#L14)

Custom hook for performing vector-based semantic search
Provides functionality for searching knowledge graph entities using embeddings

## Returns

Vector search operations

### query()

> **query**: (`params`) => `undefined` \| `Promise`\<`any`\>

Execute a vector search query

Execute a vector search query

#### Parameters

##### params

Search parameters

###### flow

`string`

Flow ID to use for the search

###### term

`string`

Search term to find similar entities for

###### limit

`number`

Maximum number of results to return

#### Returns

`undefined` \| `Promise`\<`any`\>

Promise resolving to search results
