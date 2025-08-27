[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useAgentTools

# Function: useAgentTools()

> **useAgentTools**(): `object`

Defined in: [src/state/agent-tools.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/agent-tools.ts#L12)

Custom hook for managing AI agent tools
Provides CRUD operations for agent tools stored in the TrustGraph configuration

## Returns

`object`

Agent tools state and operations

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
