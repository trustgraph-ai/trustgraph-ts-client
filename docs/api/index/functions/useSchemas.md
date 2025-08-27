[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useSchemas

# Function: useSchemas()

> **useSchemas**(): `object`

Defined in: [src/state/schemas.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/schemas.ts#L13)

Custom hook for managing data schemas
Provides functionality for fetching, updating, and deleting schemas

## Returns

`object`

Schema state and operations

### schemas

> **schemas**: `any`[][]

### schemasLoading

> **schemasLoading**: `boolean` = `schemasQuery.isLoading`

### schemasError

> **schemasError**: `null` \| `Error` = `schemasQuery.error`

### updateSchema

> **updateSchema**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `schema`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `updateSchemaMutation.mutate`

### isUpdatingSchema

> **isUpdatingSchema**: `boolean` = `updateSchemaMutation.isPending`

### createSchema

> **createSchema**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `schema`: `any`; `onSuccess?`: () => `void`; \}, `unknown`\> = `createSchemaMutation.mutate`

### isCreatingSchema

> **isCreatingSchema**: `boolean` = `createSchemaMutation.isPending`

### deleteSchema

> **deleteSchema**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `deleteSchemaMutation.mutate`

### isDeletingSchema

> **isDeletingSchema**: `boolean` = `deleteSchemaMutation.isPending`

### refetch()

> **refetch**: () => `void`

#### Returns

`void`
