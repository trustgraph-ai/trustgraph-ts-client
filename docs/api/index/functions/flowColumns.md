[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / flowColumns

# Function: flowColumns()

> **flowColumns**(`renderers?`): (`ColumnDefBase`\<[`Flow`](../type-aliases/Flow.md), `unknown`\> & `StringHeaderIdentifier` \| `ColumnDefBase`\<[`Flow`](../type-aliases/Flow.md), `unknown`\> & `IdIdentifier`\<[`Flow`](../type-aliases/Flow.md), `unknown`\> \| `AccessorKeyColumnDefBase`\<[`Flow`](../type-aliases/Flow.md), `string`\> & `Partial`\<`IdIdentifier`\<[`Flow`](../type-aliases/Flow.md), `string`\>\>)[]

Defined in: [src/tables/flows.ts:30](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/tables/flows.ts#L30)

Column definitions for the flow table
Returns UI-agnostic column definitions with optional checkbox renderer

## Parameters

### renderers?

[`TableRenderers`](../../types/interfaces/TableRenderers.md)

## Returns

(`ColumnDefBase`\<[`Flow`](../type-aliases/Flow.md), `unknown`\> & `StringHeaderIdentifier` \| `ColumnDefBase`\<[`Flow`](../type-aliases/Flow.md), `unknown`\> & `IdIdentifier`\<[`Flow`](../type-aliases/Flow.md), `unknown`\> \| `AccessorKeyColumnDefBase`\<[`Flow`](../type-aliases/Flow.md), `string`\> & `Partial`\<`IdIdentifier`\<[`Flow`](../type-aliases/Flow.md), `string`\>\>)[]
