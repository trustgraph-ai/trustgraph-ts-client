[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / AgentResponse

# Interface: AgentResponse

Defined in: [src/api/trustgraph/messages.ts:143](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/messages.ts#L143)

Response from AI agent with different phases

## Properties

### thought?

> `optional` **thought**: `string`

Defined in: [src/api/trustgraph/messages.ts:145](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/messages.ts#L145)

Agent's reasoning/thinking process

***

### observation?

> `optional` **observation**: `string`

Defined in: [src/api/trustgraph/messages.ts:147](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/messages.ts#L147)

Agent's observations

***

### answer?

> `optional` **answer**: `string`

Defined in: [src/api/trustgraph/messages.ts:149](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/messages.ts#L149)

Agent's final answer

***

### error?

> `optional` **error**: `string`

Defined in: [src/api/trustgraph/messages.ts:151](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/api/trustgraph/messages.ts#L151)

Error message if something went wrong
