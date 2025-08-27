[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useLibrary

# Function: useLibrary()

> **useLibrary**(): `object`

Defined in: [src/state/library.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/library.ts#L16)

Custom hook for managing document library operations
Provides functionality for fetching, deleting, and submitting documents

## Returns

`object`

Library state and operations

### documents

> **documents**: `undefined` \| [`DocumentMetadata`](../interfaces/DocumentMetadata.md)[] = `documentsQuery.data`

### isLoading

> **isLoading**: `boolean` = `documentsQuery.isLoading`

### isError

> **isError**: `boolean` = `documentsQuery.isError`

### error

> **error**: `null` \| `Error` = `documentsQuery.error`

### deleteDocuments

> **deleteDocuments**: `UseMutateFunction`\<`void`, `Error`, \{ `ids`: `string`[]; `onSuccess?`: () => `void`; \}, `unknown`\> = `deleteDocumentsMutation.mutate`

### isDeleting

> **isDeleting**: `boolean` = `deleteDocumentsMutation.isPending`

### deleteError

> **deleteError**: `null` \| `Error` = `deleteDocumentsMutation.error`

### submitDocuments

> **submitDocuments**: `UseMutateFunction`\<`void`, `Error`, \{ `ids`: `string`[]; `flow`: `string`; `tags`: `string`[]; `onSuccess?`: () => `void`; \}, `unknown`\> = `submitDocumentsMutation.mutate`

### isSubmitting

> **isSubmitting**: `boolean` = `submitDocumentsMutation.isPending`

### submitError

> **submitError**: `null` \| `Error` = `submitDocumentsMutation.error`

### uploadFiles

> **uploadFiles**: `UseMutateFunction`\<`void`[], `Error`, \{ `files`: `File`[]; `params`: `any`; `mimeType`: `string`; `user`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `uploadFilesMutation.mutate`

### isUploadingFiles

> **isUploadingFiles**: `boolean` = `uploadFilesMutation.isPending`

### filesUploadError

> **filesUploadError**: `null` \| `Error` = `uploadFilesMutation.error`

### uploadTexts

> **uploadTexts**: `UseMutateFunction`\<`void`, `Error`, \{ `texts`: `string`[]; `params`: `any`; `mimeType`: `string`; `user`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `uploadTextsMutation.mutate`

### isUploadingTexts

> **isUploadingTexts**: `boolean` = `uploadTextsMutation.isPending`

### textsUploadError

> **textsUploadError**: `null` \| `Error` = `uploadTextsMutation.error`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`undefined` \| [`DocumentMetadata`](../interfaces/DocumentMetadata.md)[], `Error`\>\> = `documentsQuery.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`undefined` \| [`DocumentMetadata`](../interfaces/DocumentMetadata.md)[], `Error`\>\>
