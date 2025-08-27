[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / ConfigApi

# Class: ConfigApi

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1170](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1170)

ConfigApi - Dedicated configuration management interface
Handles system configuration, prompts, and token cost tracking

## Constructors

### Constructor

> **new ConfigApi**(`api`): `ConfigApi`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1173](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1173)

#### Parameters

##### api

[`BaseApi`](BaseApi.md)

#### Returns

`ConfigApi`

## Methods

### getConfigAll()

> **getConfigAll**(): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1180](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1180)

Retrieves complete configuration

#### Returns

`Promise`\<`object`\>

***

### getConfig()

> **getConfig**(`keys`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1193](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1193)

Retrieves specific configuration entries

#### Parameters

##### keys

`object`[]

#### Returns

`Promise`\<`object`\>

***

### putConfig()

> **putConfig**(`values`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1207](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1207)

Updates configuration values

#### Parameters

##### values

`object`[]

#### Returns

`Promise`\<`object`\>

***

### deleteConfig()

> **deleteConfig**(`keys`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1221](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1221)

Deletes configuration entries

#### Parameters

##### keys

###### type

`string`

###### key

`string`

#### Returns

`Promise`\<`object`\>

***

### getPrompts()

> **getPrompts**(): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1237](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1237)

Retrieves available prompt templates

#### Returns

`Promise`\<`any`\>

***

### getPrompt()

> **getPrompt**(`id`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1247](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1247)

Retrieves a specific prompt template

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### getSystemPrompt()

> **getSystemPrompt**(): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1257](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1257)

Retrieves system prompt configuration

#### Returns

`Promise`\<`any`\>

***

### list()

> **list**(`type`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1267](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1267)

Lists available configuration types

#### Parameters

##### type

`string`

#### Returns

`Promise`\<`object`\>

***

### getValues()

> **getValues**(`type`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1283](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1283)

Retrieves all key/values for a specific type

#### Parameters

##### type

`string`

#### Returns

`Promise`\<`any`\>

***

### getTokenCosts()

> **getTokenCosts**(): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:1300](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L1300)

Retrieves token cost information for different AI models
Useful for cost tracking and optimization

#### Returns

`Promise`\<`any`\>
