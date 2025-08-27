[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / WorkbenchState

# Interface: WorkbenchState

Defined in: [src/state/workbench.ts:9](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L9)

State interface for the main workbench/workspace application
Manages the current tool selection, entity selection, and available entities

## Properties

### selected?

> `optional` **selected**: [`Entity`](Entity.md)

Defined in: [src/state/workbench.ts:11](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L11)

Currently selected entity in the knowledge graph

***

### tool

> **tool**: `string`

Defined in: [src/state/workbench.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L13)

Currently active tool/page (e.g., "chat", "graph", "search")

***

### entities

> **entities**: [`Entity`](Entity.md)[]

Defined in: [src/state/workbench.ts:15](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L15)

List of all available entities in the current context

***

### setSelected()

> **setSelected**: (`e`) => `void`

Defined in: [src/state/workbench.ts:18](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L18)

Select a specific entity

#### Parameters

##### e

[`Entity`](Entity.md)

#### Returns

`void`

***

### unsetSelected()

> **unsetSelected**: () => `void`

Defined in: [src/state/workbench.ts:20](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L20)

Clear the current entity selection

#### Returns

`void`

***

### setTool()

> **setTool**: (`v`) => `void`

Defined in: [src/state/workbench.ts:22](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L22)

Switch to a different tool/page

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setEntities()

> **setEntities**: (`ents`) => `void`

Defined in: [src/state/workbench.ts:24](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/state/workbench.ts#L24)

Update the available entities list

#### Parameters

##### ents

[`Entity`](Entity.md)[]

#### Returns

`void`
