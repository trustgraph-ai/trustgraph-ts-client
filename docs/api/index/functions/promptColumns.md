[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / promptColumns

# Function: promptColumns()

> **promptColumns**(`renderers?`): (`AccessorKeyColumnDefBase`\<[`Prompt`](../type-aliases/Prompt.md), `"text"` \| `"json"`\> & `Partial`\<`IdIdentifier`\<[`Prompt`](../type-aliases/Prompt.md), `"text"` \| `"json"`\>\> \| `AccessorKeyColumnDefBase`\<[`Prompt`](../type-aliases/Prompt.md), `boolean`\> & `Partial`\<`IdIdentifier`\<[`Prompt`](../type-aliases/Prompt.md), `boolean`\>\>)[]

Defined in: [src/tables/prompts.ts:22](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/tables/prompts.ts#L22)

Column definitions for the prompts table
Returns UI-agnostic column definitions that can be used with any table component

## Parameters

### renderers?

[`TableRenderers`](../../types/interfaces/TableRenderers.md)

## Returns

(`AccessorKeyColumnDefBase`\<[`Prompt`](../type-aliases/Prompt.md), `"text"` \| `"json"`\> & `Partial`\<`IdIdentifier`\<[`Prompt`](../type-aliases/Prompt.md), `"text"` \| `"json"`\>\> \| `AccessorKeyColumnDefBase`\<[`Prompt`](../type-aliases/Prompt.md), `boolean`\> & `Partial`\<`IdIdentifier`\<[`Prompt`](../type-aliases/Prompt.md), `boolean`\>\>)[]
