[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useChat

# Function: useChat()

> **useChat**(): `object`

Defined in: [src/state/chat-query.ts:20](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/chat-query.ts#L20)

Custom hook for managing chat operations using React Query
Provides functionality for sending chat messages and handling responses

## Returns

`object`

Chat operations and state

### submitMessage

> **submitMessage**: `UseMutateFunction`\<`string`, `Error`, \{ `input`: `string`; \}, `unknown`\> = `chatMutation.mutate`

### isSubmitting

> **isSubmitting**: `boolean` = `chatMutation.isPending`

### submitError

> **submitError**: `null` \| `Error` = `chatMutation.error`
