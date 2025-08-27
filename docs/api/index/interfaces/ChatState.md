[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / ChatState

# Interface: ChatState

Defined in: [src/state/chat.ts:14](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L14)

State interface for chat management

## Properties

### messages

> **messages**: `Message`[]

Defined in: [src/state/chat.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L16)

Array of chat messages

***

### input

> **input**: `string`

Defined in: [src/state/chat.ts:18](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L18)

Current user input text

***

### chatMode

> **chatMode**: [`ChatMode`](../type-aliases/ChatMode.md)

Defined in: [src/state/chat.ts:20](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L20)

Current chat mode

***

### setMessages()

> **setMessages**: (`v`) => `void`

Defined in: [src/state/chat.ts:23](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L23)

Update the entire messages array

#### Parameters

##### v

`Message`[]

#### Returns

`void`

***

### addMessage()

> **addMessage**: (`role`, `text`, `type?`) => `void`

Defined in: [src/state/chat.ts:25](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L25)

Add a new message to the chat history

#### Parameters

##### role

`string`

##### text

`string`

##### type?

`"normal"` | `"thinking"` | `"observation"` | `"answer"`

#### Returns

`void`

***

### setInput()

> **setInput**: (`v`) => `void`

Defined in: [src/state/chat.ts:31](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L31)

Update the current user input

#### Parameters

##### v

`string`

#### Returns

`void`

***

### setChatMode()

> **setChatMode**: (`mode`) => `void`

Defined in: [src/state/chat.ts:33](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/chat.ts#L33)

Change the current chat mode

#### Parameters

##### mode

[`ChatMode`](../type-aliases/ChatMode.md)

#### Returns

`void`
