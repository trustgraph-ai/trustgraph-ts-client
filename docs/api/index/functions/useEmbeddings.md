[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useEmbeddings

# Function: useEmbeddings()

> **useEmbeddings**(`params`): `object`

Defined in: [src/state/embeddings.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/embeddings.ts#L16)

Custom hook for generating embeddings from text using AI models
Provides functionality for computing vector embeddings for semantic search

## Parameters

### params

Configuration object

#### flow?

`string`

Optional flow ID to use (defaults to "default")

#### term

`string`

Text content to generate embeddings for

## Returns

Embeddings state and operations

### embeddings

> **embeddings**: `any` = `query.data`

Generated embeddings vector data

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

Whether embeddings are being generated

### isError

> **isError**: `boolean` = `query.isError`

Whether an error occurred

### error

> **error**: `null` \| `Error` = `query.error`

Error details if generation failed

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`, `Error`\>\> = `query.refetch`

Manual refetch function

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`, `Error`\>\>
