[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useTokenCosts

# Function: useTokenCosts()

> **useTokenCosts**(): `object`

Defined in: [src/state/token-costs.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/token-costs.ts#L13)

Custom hook for managing token cost operations
Provides functionality for fetching, deleting, and updating token costs
for AI models

## Returns

`object`

Token cost state and operations

### tokenCosts

> **tokenCosts**: `any` = `query.data`

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

### isError

> **isError**: `boolean` = `query.isError`

### error

> **error**: `null` \| `Error` = `query.error`

### deleteTokenCosts

> **deleteTokenCosts**: `UseMutateFunction`\<`void`, `Error`, \{ `model`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `deleteTokenCostsMutation.mutate`

### isDeleting

> **isDeleting**: `boolean` = `deleteTokenCostsMutation.isPending`

### deleteError

> **deleteError**: `null` \| `Error` = `deleteTokenCostsMutation.error`

### updateTokenCost

> **updateTokenCost**: `UseMutateFunction`\<`void`, `Error`, \{ `model`: `string`; `input_price`: `number`; `output_price`: `number`; `onSuccess?`: () => `void`; \}, `unknown`\> = `updateTokenCostMutation.mutate`

### isSubmitting

> **isSubmitting**: `boolean` = `updateTokenCostMutation.isPending`

### submitError

> **submitError**: `null` \| `Error` = `updateTokenCostMutation.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`, `Error`\>\> = `query.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`, `Error`\>\>
