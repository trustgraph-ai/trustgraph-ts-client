[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useTriples

# Function: useTriples()

> **useTriples**(`__namedParameters`): `object`

Defined in: [src/state/triples.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/triples.ts#L13)

Custom hook for managing token cost operations
Provides functionality for fetching, deleting, and updating token costs
for AI models

## Parameters

### \_\_namedParameters

#### flow?

`string`

#### s?

`any`

#### p?

`any`

#### o?

`any`

#### limit?

`number`

## Returns

`object`

Token cost state and operations

### triples

> **triples**: `any` = `query.data`

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

### isError

> **isError**: `boolean` = `query.isError`

### error

> **error**: `null` \| `Error` = `query.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`any`, `Error`\>\> = `query.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`any`, `Error`\>\>
