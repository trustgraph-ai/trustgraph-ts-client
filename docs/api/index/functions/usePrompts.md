[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / usePrompts

# Function: usePrompts()

> **usePrompts**(): `object`

Defined in: [src/state/prompts.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/prompts.ts#L12)

Custom hook for managing AI prompts (system prompt and prompt templates)
Provides CRUD operations for both the system prompt and user-defined prompt templates

## Returns

`object`

Prompts state and operations

### systemPrompt

> **systemPrompt**: `any` = `systemPromptQuery.data`

### systemPromptLoading

> **systemPromptLoading**: `boolean` = `systemPromptQuery.isLoading`

### systemPromptError

> **systemPromptError**: `null` \| `Error` = `systemPromptQuery.error`

### prompts

> **prompts**: `any`

### promptsLoading

> **promptsLoading**: `boolean` = `promptsQuery.isLoading`

### promptsError

> **promptsError**: `null` \| `Error` = `promptsQuery.error`

### updateSystemPrompt

> **updateSystemPrompt**: `UseMutateFunction`\<`void`, `Error`, \{ `prompt`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `updateSystemPromptMutation.mutate`

### isUpdatingSystemPrompt

> **isUpdatingSystemPrompt**: `boolean` = `updateSystemPromptMutation.isPending`

### updatePrompt

> **updatePrompt**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `prompt`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `updatePromptMutation.mutate`

### isUpdatingPrompt

> **isUpdatingPrompt**: `boolean` = `updatePromptMutation.isPending`

### createPrompt

> **createPrompt**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `prompt`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `createPromptMutation.mutate`

### isCreatingPrompt

> **isCreatingPrompt**: `boolean` = `createPromptMutation.isPending`

### deletePrompt

> **deletePrompt**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `deletePromptMutation.mutate`

### isDeletingPrompt

> **isDeletingPrompt**: `boolean` = `deletePromptMutation.isPending`

### refetch()

> **refetch**: () => `void`

#### Returns

`void`
