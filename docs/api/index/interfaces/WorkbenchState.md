[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / WorkbenchState

# Interface: WorkbenchState

Defined in: [src/state/workbench.ts:10](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L10)

State interface for the main workbench/workspace application
Manages the current tool selection, entity selection, and available entities

## Properties

### selected?

> `optional` **selected**: [`Entity`](Entity.md)

Defined in: [src/state/workbench.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L12)

***

### tool

> **tool**: `string`

Defined in: [src/state/workbench.ts:14](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L14)

***

### entities

> **entities**: [`Entity`](Entity.md)[]

Defined in: [src/state/workbench.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L16)

***

### setSelected()

> **setSelected**: (`e`) => `void`

Defined in: [src/state/workbench.ts:19](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L19)

#### Parameters

##### e

[`Entity`](Entity.md)

#### Returns

`void`

***

### unsetSelected()

> **unsetSelected**: () => `void`

Defined in: [src/state/workbench.ts:20](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L20)

#### Returns

`void`

***

### setTool()

> **setTool**: (`v`) => `void`

Defined in: [src/state/workbench.ts:23](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L23)

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setEntities()

> **setEntities**: (`ents`) => `void`

Defined in: [src/state/workbench.ts:26](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/workbench.ts#L26)

#### Parameters

##### ents

[`Entity`](Entity.md)[]

#### Returns

`void`
