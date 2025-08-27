[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / LibrarianApi

# Class: LibrarianApi

Defined in: [src/api/trustgraph/trustgraph-socket.ts:633](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L633)

LibrarianApi - Manages document storage and retrieval
Handles document lifecycle including upload, processing, and removal

## Constructors

### Constructor

> **new LibrarianApi**(`api`): `LibrarianApi`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:636](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L636)

#### Parameters

##### api

[`BaseApi`](BaseApi.md)

#### Returns

`LibrarianApi`

## Methods

### getDocuments()

> **getDocuments**(): `Promise`\<`undefined` \| [`DocumentMetadata`](../../../../index/interfaces/DocumentMetadata.md)[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:643](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L643)

Retrieves list of all documents in the system

#### Returns

`Promise`\<`undefined` \| [`DocumentMetadata`](../../../../index/interfaces/DocumentMetadata.md)[]\>

***

### getProcessing()

> **getProcessing**(): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:659](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L659)

Retrieves list of documents currently being processed

#### Returns

`Promise`\<`any`\>

***

### loadDocument()

> **loadDocument**(`document`, `mimeType`, `title`, `comments`, `tags`, `user`, `id?`, `metadata?`): `Promise`\<[`LibraryResponse`](../../../../index/interfaces/LibraryResponse.md)\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:683](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L683)

Uploads a document to the library with full metadata

#### Parameters

##### document

`string`

Base64-encoded document content

##### mimeType

`string`

Document MIME type

##### title

`string`

Document title

##### comments

`string`

Additional comments

##### tags

`string`[]

Document tags for categorization

##### user

`string`

User identifier

##### id?

`string`

Optional document identifier

##### metadata?

[`ApiTriple`](../../../../index/interfaces/ApiTriple.md)[]

Optional metadata as triples

#### Returns

`Promise`\<[`LibraryResponse`](../../../../index/interfaces/LibraryResponse.md)\>

***

### removeDocument()

> **removeDocument**(`id`, `user`): `Promise`\<[`LibraryResponse`](../../../../index/interfaces/LibraryResponse.md)\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:716](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L716)

Removes a document from the library

#### Parameters

##### id

`string`

##### user

`string`

#### Returns

`Promise`\<[`LibraryResponse`](../../../../index/interfaces/LibraryResponse.md)\>

***

### addProcessing()

> **addProcessing**(`id`, `doc_id`, `flow`, `user?`, `collection?`, `tags?`): `Promise`\<[`LibraryResponse`](../../../../index/interfaces/LibraryResponse.md)\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:737](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L737)

Adds a document to the processing queue

#### Parameters

##### id

`string`

Processing job identifier

##### doc\_id

`string`

Document to process

##### flow

`string`

Processing flow to use

##### user?

`string`

User identifier

##### collection?

`string`

Collection to add processed data to

##### tags?

`string`[]

Tags for the processing job

#### Returns

`Promise`\<[`LibraryResponse`](../../../../index/interfaces/LibraryResponse.md)\>
