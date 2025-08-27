[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / ProgressState

# Interface: ProgressState

Defined in: [src/state/progress.ts:4](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/progress.ts#L4)

## Properties

### activity

> **activity**: `Set`\<`string`\>

Defined in: [src/state/progress.ts:7](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/progress.ts#L7)

***

### error

> **error**: `string`

Defined in: [src/state/progress.ts:10](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/progress.ts#L10)

***

### addActivity()

> **addActivity**: (`act`) => `void`

Defined in: [src/state/progress.ts:13](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/progress.ts#L13)

#### Parameters

##### act

`string`

#### Returns

`void`

***

### removeActivity()

> **removeActivity**: (`act`) => `void`

Defined in: [src/state/progress.ts:16](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/progress.ts#L16)

#### Parameters

##### act

`string`

#### Returns

`void`

***

### setError()

> **setError**: (`error`) => `void`

Defined in: [src/state/progress.ts:19](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/progress.ts#L19)

#### Parameters

##### error

`string`

#### Returns

`void`
