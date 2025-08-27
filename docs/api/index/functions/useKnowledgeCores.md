[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useKnowledgeCores

# Function: useKnowledgeCores()

> **useKnowledgeCores**(): `object`

Defined in: [src/state/knowledge-cores.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/knowledge-cores.ts#L12)

Custom hook for managing knowledge core operations
Provides functionality for fetching, deleting, down/uploading cores

## Returns

`object`

Knowledge core state and operations

### knowledgeCores

> **knowledgeCores**: `undefined` \| `object`[] = `query.data`

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

### isError

> **isError**: `boolean` = `query.isError`

### error

> **error**: `null` \| `Error` = `query.error`

### deleteKnowledgeCores

> **deleteKnowledgeCores**: `UseMutateFunction`\<`void`, `Error`, \{ `ids`: `string`[]; `onSuccess?`: () => `void`; \}, `unknown`\> = `deleteKnowledgeCoresMutation.mutate`

### isDeleting

> **isDeleting**: `boolean` = `deleteKnowledgeCoresMutation.isPending`

### deleteError

> **deleteError**: `null` \| `Error` = `deleteKnowledgeCoresMutation.error`

### loadKnowledgeCores

> **loadKnowledgeCores**: `UseMutateFunction`\<`void`, `Error`, \{ `ids`: `string`[]; `flow`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `loadKnowledgeCoresMutation.mutate`

### isLoadingCores

> **isLoadingCores**: `boolean` = `loadKnowledgeCoresMutation.isPending`

### loadError

> **loadError**: `null` \| `Error` = `loadKnowledgeCoresMutation.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`object`[], `Error`\>\> = `query.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`object`[], `Error`\>\>
