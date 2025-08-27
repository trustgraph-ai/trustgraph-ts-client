[**@trustgraph/client**](../../../../README.md)

***

[@trustgraph/client](../../../../README.md) / [api/trustgraph/trustgraph-socket](../README.md) / FlowsApi

# Class: FlowsApi

Defined in: [src/api/trustgraph/trustgraph-socket.ts:768](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L768)

FlowsApi - Manages processing flows and configuration
Flows define how documents and data are processed through the system

## Constructors

### Constructor

> **new FlowsApi**(`api`): `FlowsApi`

Defined in: [src/api/trustgraph/trustgraph-socket.ts:771](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L771)

#### Parameters

##### api

[`BaseApi`](BaseApi.md)

#### Returns

`FlowsApi`

## Methods

### getFlows()

> **getFlows**(): `Promise`\<`string`[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:778](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L778)

Retrieves list of available flows

#### Returns

`Promise`\<`string`[]\>

***

### getFlow()

> **getFlow**(`id`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:793](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L793)

Retrieves definition of a specific flow

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### getConfigAll()

> **getConfigAll**(): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:811](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L811)

Retrieves all configuration settings

#### Returns

`Promise`\<`object`\>

***

### getConfig()

> **getConfig**(`keys`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:824](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L824)

Retrieves specific configuration values by key

#### Parameters

##### keys

`object`[]

#### Returns

`Promise`\<`object`\>

***

### putConfig()

> **putConfig**(`values`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:838](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L838)

Updates configuration values

#### Parameters

##### values

`object`[]

#### Returns

`Promise`\<`object`\>

***

### deleteConfig()

> **deleteConfig**(`keys`): `Promise`\<`object`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:852](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L852)

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

Defined in: [src/api/trustgraph/trustgraph-socket.ts:868](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L868)

Retrieves list of available prompt templates

#### Returns

`Promise`\<`any`\>

***

### getPrompt()

> **getPrompt**(`id`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:878](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L878)

Retrieves a specific prompt template

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`any`\>

***

### getSystemPrompt()

> **getSystemPrompt**(): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:887](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L887)

Retrieves the system prompt configuration

#### Returns

`Promise`\<`any`\>

***

### getFlowClasses()

> **getFlowClasses**(): `Promise`\<`undefined` \| `string`[]\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:898](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L898)

Retrieves list of available flow classes (templates)

#### Returns

`Promise`\<`undefined` \| `string`[]\>

***

### getFlowClass()

> **getFlowClass**(`name`): `Promise`\<`any`\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:913](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L913)

Retrieves definition of a specific flow class

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`any`\>

***

### startFlow()

> **startFlow**(`id`, `class_name`, `description`): `Promise`\<[`FlowResponse`](../../../../index/interfaces/FlowResponse.md)\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:931](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L931)

Starts a new flow instance

#### Parameters

##### id

`string`

##### class\_name

`string`

##### description

`string`

#### Returns

`Promise`\<[`FlowResponse`](../../../../index/interfaces/FlowResponse.md)\>

***

### stopFlow()

> **stopFlow**(`id`): `Promise`\<[`FlowResponse`](../../../../index/interfaces/FlowResponse.md)\>

Defined in: [src/api/trustgraph/trustgraph-socket.ts:947](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/trustgraph-socket.ts#L947)

Stops a running flow instance

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`FlowResponse`](../../../../index/interfaces/FlowResponse.md)\>
