[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / documentColumns

# Function: documentColumns()

> **documentColumns**(`renderers?`): (`ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `StringHeaderIdentifier` \| `ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `IdIdentifier`\<[`Document`](../type-aliases/Document.md), `unknown`\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `number`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `number`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`[]\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`[]\>\>)[]

Defined in: [src/tables/document.ts:42](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/tables/document.ts#L42)

Column definitions for the document table
Returns UI-agnostic column definitions with optional renderers for tags and checkboxes

## Parameters

### renderers?

[`TableRenderers`](../../types/interfaces/TableRenderers.md)

## Returns

(`ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `StringHeaderIdentifier` \| `ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `IdIdentifier`\<[`Document`](../type-aliases/Document.md), `unknown`\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `number`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `number`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`[]\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`[]\>\>)[]
