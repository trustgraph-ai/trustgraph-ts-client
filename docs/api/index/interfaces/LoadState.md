[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / LoadState

# Interface: LoadState

Defined in: [src/state/load.ts:8](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L8)

State interface for managing document loading and upload operations
Handles file uploads, text input, metadata, and processing operations

## Properties

### title

> **title**: `string`

Defined in: [src/state/load.ts:10](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L10)

Document title/name

***

### comments

> **comments**: `string`

Defined in: [src/state/load.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L12)

Additional comments or description

***

### url

> **url**: `string`

Defined in: [src/state/load.ts:14](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L14)

Source URL (for web-based content)

***

### keywords

> **keywords**: `string`[]

Defined in: [src/state/load.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L16)

Keywords/tags associated with the document

***

### operation

> **operation**: `string`

Defined in: [src/state/load.ts:19](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L19)

Type of operation (e.g., "upload-pdf", "upload-text")

***

### files

> **files**: `File`[]

Defined in: [src/state/load.ts:22](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L22)

Files selected for upload

***

### uploaded

> **uploaded**: `string`[]

Defined in: [src/state/load.ts:24](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L24)

List of successfully uploaded file names

***

### text

> **text**: `string`

Defined in: [src/state/load.ts:26](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L26)

Direct text input content

***

### setTitle()

> **setTitle**: (`v`) => `void`

Defined in: [src/state/load.ts:29](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L29)

Update document title

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setComments()

> **setComments**: (`v`) => `void`

Defined in: [src/state/load.ts:31](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L31)

Update document comments

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setUrl()

> **setUrl**: (`v`) => `void`

Defined in: [src/state/load.ts:33](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L33)

Update document URL

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setKeywords()

> **setKeywords**: (`v`) => `void`

Defined in: [src/state/load.ts:35](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L35)

Update document keywords

#### Parameters

##### v

`string`[]

#### Returns

`void`

***

### setOperation()

> **setOperation**: (`v`) => `void`

Defined in: [src/state/load.ts:38](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L38)

Update processing operation type

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setFiles()

> **setFiles**: (`v`) => `void`

Defined in: [src/state/load.ts:41](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L41)

Update selected files

#### Parameters

##### v

`File`[]

#### Returns

`void`

***

### setUploaded()

> **setUploaded**: (`v`) => `void`

Defined in: [src/state/load.ts:43](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L43)

Update uploaded files list

#### Parameters

##### v

`string`[]

#### Returns

`void`

***

### setText()

> **setText**: (`v`) => `void`

Defined in: [src/state/load.ts:45](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L45)

Update text content

#### Parameters

##### v

`string`

#### Returns

`void`

***

### addUploaded()

> **addUploaded**: (`v`) => `void`

Defined in: [src/state/load.ts:47](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L47)

Add a single uploaded file to the list

#### Parameters

##### v

`string`

#### Returns

`void`

***

### removeFile()

> **removeFile**: (`v`) => `void`

Defined in: [src/state/load.ts:49](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L49)

Remove a file from the selection

#### Parameters

##### v

`File`

#### Returns

`void`

***

### textUploads

> **textUploads**: `number`

Defined in: [src/state/load.ts:52](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L52)

Counter for text-based uploads

***

### setTextUploads()

> **setTextUploads**: (`v`) => `void`

Defined in: [src/state/load.ts:54](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L54)

Update text upload counter

#### Parameters

##### v

`number`

#### Returns

`void`

***

### incTextUploads()

> **incTextUploads**: () => `void`

Defined in: [src/state/load.ts:56](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/load.ts#L56)

Increment the text upload counter

#### Returns

`void`
