[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useMcpTools

# Function: useMcpTools()

> **useMcpTools**(): `object`

Defined in: [src/state/mcp-tools.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/mcp-tools.ts#L12)

Custom hook for managing MCP (Model Context Protocol) tools
Provides CRUD operations for MCP tools stored in the TrustGraph configuration

## Returns

`object`

MCP tools state and operations

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
