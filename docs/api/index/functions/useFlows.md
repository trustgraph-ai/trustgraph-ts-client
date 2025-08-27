[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useFlows

# Function: useFlows()

> **useFlows**(): `object`

Defined in: [src/state/flows.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/flows.ts#L12)

Custom hook for managing flow operations
Provides functionality for fetching, deleting, and creating flows

## Returns

`object`

Flow state and operations

### flows

> **flows**: `undefined` \| `any`[] = `flowsQuery.data`

### isLoading

> **isLoading**: `boolean` = `flowsQuery.isLoading`

### isError

> **isError**: `boolean` = `flowsQuery.isError`

### error

> **error**: `null` \| `Error` = `flowsQuery.error`

### flowClasses

> **flowClasses**: `undefined` \| `any`[][] = `flowClassesQuery.data`

### isFlowClassesLoading

> **isFlowClassesLoading**: `boolean` = `flowClassesQuery.isLoading`

### isFlowClassesError

> **isFlowClassesError**: `boolean` = `flowClassesQuery.isError`

### flowClassesError

> **flowClassesError**: `null` \| `Error` = `flowClassesQuery.error`

### startFlow

> **startFlow**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `flowClass`: `string`; `description`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `startFlowMutation.mutate`

### isStarting

> **isStarting**: `boolean` = `startFlowMutation.isPending`

### startError

> **startError**: `null` \| `Error` = `startFlowMutation.error`

### stopFlows

> **stopFlows**: `UseMutateFunction`\<`void`, `Error`, \{ `ids`: `string`[]; `onSuccess?`: () => `void`; \}, `unknown`\> = `stopFlowMutation.mutate`

### isStopping

> **isStopping**: `boolean` = `stopFlowMutation.isPending`

### stopError

> **stopError**: `null` \| `Error` = `stopFlowMutation.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`[], `Error`\>\> = `flowsQuery.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`[], `Error`\>\>
