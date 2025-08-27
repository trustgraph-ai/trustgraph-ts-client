[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useEntityDetail

# Function: useEntityDetail()

> **useEntityDetail**(`entityUri`, `flowId`): `object`

Defined in: [src/state/entity-query.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/entity-query.ts#L16)

Custom hook for managing entity detail operations using React Query
Provides functionality for fetching entity details and related triples

## Parameters

### entityUri

The URI of the entity to fetch details for

`undefined` | `string`

### flowId

`string`

The flow ID to use for the query

## Returns

`object`

Entity detail state and operations

### detail

> **detail**: `undefined` \| \{ `triples`: [`ApiTriple`](../interfaces/ApiTriple.md)[]; `uri`: `string`; `label`: `string`; \} = `query.data`

### isLoading

> **isLoading**: `boolean` = `query.isLoading`

### isError

> **isError**: `boolean` = `query.isError`

### error

> **error**: `null` \| `Error` = `query.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<\{ `triples`: [`ApiTriple`](../interfaces/ApiTriple.md)[]; `uri`: `string`; `label`: `string`; \}, `Error`\>\> = `query.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<\{ `triples`: [`ApiTriple`](../interfaces/ApiTriple.md)[]; `uri`: `string`; `label`: `string`; \}, `Error`\>\>
