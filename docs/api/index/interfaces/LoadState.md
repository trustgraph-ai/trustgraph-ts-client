[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / LoadState

# Interface: LoadState

Defined in: [src/state/load.ts:8](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L8)

State interface for managing document loading and upload operations
Handles file uploads, text input, metadata, and processing operations

## Properties

### title

> **title**: `string`

Defined in: [src/state/load.ts:10](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L10)

***

### comments

> **comments**: `string`

Defined in: [src/state/load.ts:11](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L11)

***

### url

> **url**: `string`

Defined in: [src/state/load.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L12)

***

### keywords

> **keywords**: `string`[]

Defined in: [src/state/load.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L13)

***

### operation

> **operation**: `string`

Defined in: [src/state/load.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L16)

***

### files

> **files**: `File`[]

Defined in: [src/state/load.ts:19](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L19)

***

### uploaded

> **uploaded**: `string`[]

Defined in: [src/state/load.ts:20](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L20)

***

### text

> **text**: `string`

Defined in: [src/state/load.ts:21](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L21)

***

### setTitle()

> **setTitle**: (`v`) => `void`

Defined in: [src/state/load.ts:24](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L24)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setComments()

> **setComments**: (`v`) => `void`

Defined in: [src/state/load.ts:25](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L25)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setUrl()

> **setUrl**: (`v`) => `void`

Defined in: [src/state/load.ts:26](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L26)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setKeywords()

> **setKeywords**: (`v`) => `void`

Defined in: [src/state/load.ts:27](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L27)

#### Parameters

##### v

`string`[]

#### Returns

`void`

***

### setOperation()

> **setOperation**: (`v`) => `void`

Defined in: [src/state/load.ts:30](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L30)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setFiles()

> **setFiles**: (`v`) => `void`

Defined in: [src/state/load.ts:33](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L33)

#### Parameters

##### v

`File`[]

#### Returns

`void`

***

### setUploaded()

> **setUploaded**: (`v`) => `void`

Defined in: [src/state/load.ts:34](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L34)

#### Parameters

##### v

`string`[]

#### Returns

`void`

***

### setText()

> **setText**: (`v`) => `void`

Defined in: [src/state/load.ts:35](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L35)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### addUploaded()

> **addUploaded**: (`v`) => `void`

Defined in: [src/state/load.ts:36](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L36)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### removeFile()

> **removeFile**: (`v`) => `void`

Defined in: [src/state/load.ts:37](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L37)

#### Parameters

##### v

`File`

#### Returns

`void`

***

### textUploads

> **textUploads**: `number`

Defined in: [src/state/load.ts:40](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L40)

***

### setTextUploads()

> **setTextUploads**: (`v`) => `void`

Defined in: [src/state/load.ts:41](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L41)

#### Parameters

##### v

`number`

#### Returns

`void`

***

### incTextUploads()

> **incTextUploads**: () => `void`

Defined in: [src/state/load.ts:42](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/load.ts#L42)

#### Returns

`void`
