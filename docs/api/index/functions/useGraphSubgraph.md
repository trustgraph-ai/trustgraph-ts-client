[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useGraphSubgraph

# Function: useGraphSubgraph()

> **useGraphSubgraph**(`entityUri`, `flowId`): `object`

Defined in: [src/state/graph-query.ts:21](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/graph-query.ts#L21)

Custom hook for managing graph visualization operations using React Query
Provides functionality for fetching and updating graph subgraphs

## Parameters

### entityUri

The URI of the entity to build the graph around

`undefined` | `string`

### flowId

`string`

The flow ID to use for the query

## Returns

`object`

Graph state and operations

### view

> **view**: `undefined` \| `Subgraph` = `query.data`

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

### isError

> **isError**: `boolean` = `query.isError`

### error

> **error**: `null` \| `Error` = `query.error`

### updateSubgraph

> **updateSubgraph**: `UseMutateFunction`\<`Subgraph`, `Error`, \{ `nodeId`: `string`; `currentGraph`: `Subgraph`; \}, `unknown`\> = `updateMutation.mutate`

### isUpdating

> **isUpdating**: `boolean` = `updateMutation.isPending`

### navigateByRelationship

> **navigateByRelationship**: `UseMutateFunction`\<`Subgraph`, `Error`, \{ `selectedNodeId`: `string`; `relationshipUri`: `string`; `direction`: `"incoming"` \| `"outgoing"`; `currentGraph`: `Subgraph`; \}, `unknown`\> = `relationshipNavigationMutation.mutate`

### isNavigating

> **isNavigating**: `boolean` = `relationshipNavigationMutation.isPending`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`Subgraph`, `Error`\>\> = `query.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`Subgraph`, `Error`\>\>
