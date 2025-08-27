[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useGraphEmbeddings

# Function: useGraphEmbeddings()

> **useGraphEmbeddings**(`__namedParameters`): `object`

Defined in: [src/state/graph-embeddings.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/graph-embeddings.ts#L13)

Custom hook for managing token cost operations
Provides functionality for fetching, deleting, and updating token costs
for AI models

## Parameters

### \_\_namedParameters

#### flow?

`string`

#### vecs

`number`[][]

#### limit

`number`

## Returns

`object`

Token cost state and operations

### graphEmbeddings

> **graphEmbeddings**: `any` = `query.data`

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

### isError

> **isError**: `boolean` = `query.isError`

### error

> **error**: `null` \| `Error` = `query.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`, `Error`\>\> = `query.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`, `Error`\>\>
