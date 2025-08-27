[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / RequestMessage

# Interface: RequestMessage

Defined in: [src/api/trustgraph/messages.ts:25](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/messages.ts#L25)

Standard request message structure for WebSocket communication

## Properties

### id

> **id**: `string`

Defined in: [src/api/trustgraph/messages.ts:27](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/messages.ts#L27)

Unique message identifier

***

### service

> **service**: `string`

Defined in: [src/api/trustgraph/messages.ts:29](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/messages.ts#L29)

Target service name

***

### request

> **request**: `object`

Defined in: [src/api/trustgraph/messages.ts:31](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/messages.ts#L31)

Request payload

***

### flow?

> `optional` **flow**: `string`

Defined in: [src/api/trustgraph/messages.ts:33](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/9a2bad46722f27bb783391eed1d9289614cc905a/src/api/trustgraph/messages.ts#L33)

Optional flow context
