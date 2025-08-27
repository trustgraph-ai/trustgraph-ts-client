[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / SearchState

# Interface: SearchState

Defined in: [src/state/search.ts:8](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/search.ts#L8)

Search state interface for managing search functionality

## Properties

### rows

> **rows**: `Row`[]

Defined in: [src/state/search.ts:10](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/search.ts#L10)

Array of Row objects representing search results or filtered data

***

### setRows()

> **setRows**: (`v`) => `void`

Defined in: [src/state/search.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/search.ts#L13)

Function to update the entire rows array (replaces all results)

#### Parameters

##### v

`Row`[]

#### Returns

`void`

***

### input

> **input**: `string`

Defined in: [src/state/search.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/search.ts#L16)

Current search input/query string from user

***

### setInput()

> **setInput**: (`v`) => `void`

Defined in: [src/state/search.ts:19](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/search.ts#L19)

Function to update the search input value

#### Parameters

##### v

`string`

#### Returns

`void`
