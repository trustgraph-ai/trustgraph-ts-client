[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useVectorSearch

# Function: useVectorSearch()

> **useVectorSearch**(): `object`

Defined in: [src/state/vector-search.ts:14](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/vector-search.ts#L14)

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
