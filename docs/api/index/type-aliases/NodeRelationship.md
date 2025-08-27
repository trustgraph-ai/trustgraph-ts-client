[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / NodeRelationship

# Type Alias: NodeRelationship

> **NodeRelationship** = `object`

Defined in: [src/tables/node-relationships.ts:8](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/tables/node-relationships.ts#L8)

Node relationship data structure for the relationships table
Represents a single relationship with direction and label

## Properties

### relationship

> **relationship**: `string`

Defined in: [src/tables/node-relationships.ts:9](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/tables/node-relationships.ts#L9)

***

### direction

> **direction**: `"incoming"` \| `"outgoing"`

Defined in: [src/tables/node-relationships.ts:10](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/tables/node-relationships.ts#L10)

***

### uri?

> `optional` **uri**: `string`

Defined in: [src/tables/node-relationships.ts:11](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/tables/node-relationships.ts#L11)

***

### onRelationshipClick()?

> `optional` **onRelationshipClick**: (`uri`) => `void`

Defined in: [src/tables/node-relationships.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/tables/node-relationships.ts#L12)

#### Parameters

##### uri

`string`

#### Returns

`void`
