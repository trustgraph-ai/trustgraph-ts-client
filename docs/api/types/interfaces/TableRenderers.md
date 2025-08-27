[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [types](../README.md) / TableRenderers

# Interface: TableRenderers

Defined in: [src/types/index.ts:40](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/types/index.ts#L40)

## Properties

### tag()?

> `optional` **tag**: (`value`, `color?`) => `ReactNode`

Defined in: [src/types/index.ts:41](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/types/index.ts#L41)

#### Parameters

##### value

`string`

##### color?

`string`

#### Returns

`ReactNode`

***

### checkbox()?

> `optional` **checkbox**: (`checked`, `onChange`, `indeterminate?`) => `ReactNode`

Defined in: [src/types/index.ts:42](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/types/index.ts#L42)

#### Parameters

##### checked

`boolean`

##### onChange

() => `void`

##### indeterminate?

`string`

#### Returns

`ReactNode`

***

### code()?

> `optional` **code**: (`value`) => `ReactNode`

Defined in: [src/types/index.ts:43](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/types/index.ts#L43)

#### Parameters

##### value

`string`

#### Returns

`ReactNode`

***

### badge()?

> `optional` **badge**: (`items`) => `ReactNode`

Defined in: [src/types/index.ts:44](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/types/index.ts#L44)

#### Parameters

##### items

`string`[]

#### Returns

`ReactNode`

***

### button()?

> `optional` **button**: (`label`, `onClick`, `variant?`) => `ReactNode`

Defined in: [src/types/index.ts:45](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/types/index.ts#L45)

#### Parameters

##### label

`string`

##### onClick

() => `void`

##### variant?

`string`

#### Returns

`ReactNode`
