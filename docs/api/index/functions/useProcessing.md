[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useProcessing

# Function: useProcessing()

> **useProcessing**(): `object`

Defined in: [src/state/processing.ts:11](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/processing.ts#L11)

Custom hook for managing processing operations
Provides functionality for fetching, deleting, and creating processing

## Returns

`object`

Processing state and operations

### processing

> **processing**: `any` = `processingQuery.data`

### isLoading

> **isLoading**: `boolean` = `processingQuery.isLoading`

### isError

> **isError**: `boolean` = `processingQuery.isError`

### error

> **error**: `null` \| `Error` = `processingQuery.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`, `Error`\>\> = `processingQuery.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`, `Error`\>\>
