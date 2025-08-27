[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / SessionState

# Interface: SessionState

Defined in: [src/state/session.ts:7](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/session.ts#L7)

Session state interface for managing workflow context

## Properties

### flowId

> **flowId**: `string`

Defined in: [src/state/session.ts:9](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/session.ts#L9)

Current flow identifier

***

### flow

> **flow**: `string`

Defined in: [src/state/session.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/session.ts#L12)

Current flow name/type

***

### flowDescription

> **flowDescription**: `string`

Defined in: [src/state/session.ts:15](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/session.ts#L15)

Description of the current flow

***

### setFlowId()

> **setFlowId**: (`v`) => `void`

Defined in: [src/state/session.ts:18](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/session.ts#L18)

Update the flow identifier

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setFlow()

> **setFlow**: (`v`) => `void`

Defined in: [src/state/session.ts:21](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/session.ts#L21)

Update the current flow

#### Parameters

##### v

`string`

#### Returns

`void`
