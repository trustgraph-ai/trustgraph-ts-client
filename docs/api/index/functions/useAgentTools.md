[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useAgentTools

# Function: useAgentTools()

> **useAgentTools**(): `object`

Defined in: [src/state/agent-tools.ts:15](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/agent-tools.ts#L15)

Custom hook for managing agent tools (create, read, update, delete operations)
Provides CRUD operations for agent tools stored in the TrustGraph configuration

## Returns

`object`

### tools

> **tools**: `any`

### isLoading

> **isLoading**: `boolean` = `toolsQuery.isLoading`

### isError

> **isError**: `boolean` = `toolsQuery.isError`

### error

> **error**: `null` \| `Error` = `toolsQuery.error`

### updateTool

> **updateTool**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `tool`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `updateToolMutation.mutate`

### isUpdatingTool

> **isUpdatingTool**: `boolean` = `updateToolMutation.isPending`

### createTool

> **createTool**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `tool`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `createToolMutation.mutate`

### isCreatingTool

> **isCreatingTool**: `boolean` = `createToolMutation.isPending`

### deleteTool

> **deleteTool**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `deleteToolMutation.mutate`

### isDeletingTool

> **isDeletingTool**: `boolean` = `deleteToolMutation.isPending`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`, `Error`\>\> = `toolsQuery.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`, `Error`\>\>
