[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / documentColumns

# Function: documentColumns()

> **documentColumns**(`renderers?`): (`ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `StringHeaderIdentifier` \| `ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `IdIdentifier`\<[`Document`](../type-aliases/Document.md), `unknown`\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `number`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `number`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`[]\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`[]\>\>)[]

Defined in: [src/tables/document.ts:42](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/tables/document.ts#L42)

Column definitions for the document table
Returns UI-agnostic column definitions with optional renderers for tags and checkboxes

## Parameters

### renderers?

[`TableRenderers`](../../types/interfaces/TableRenderers.md)

## Returns

(`ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `StringHeaderIdentifier` \| `ColumnDefBase`\<[`Document`](../type-aliases/Document.md), `unknown`\> & `IdIdentifier`\<[`Document`](../type-aliases/Document.md), `unknown`\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `number`\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `number`\>\> \| `AccessorKeyColumnDefBase`\<[`Document`](../type-aliases/Document.md), `string`[]\> & `Partial`\<`IdIdentifier`\<[`Document`](../type-aliases/Document.md), `string`[]\>\>)[]
