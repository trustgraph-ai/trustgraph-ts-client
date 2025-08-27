[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useSchemas

# Function: useSchemas()

> **useSchemas**(): `object`

Defined in: [src/state/schemas.ts:7](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/schemas.ts#L7)

## Returns

`object`

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
