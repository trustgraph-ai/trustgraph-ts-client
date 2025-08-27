[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / ProgressState

# Interface: ProgressState

Defined in: [src/state/progress.ts:7](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/progress.ts#L7)

Progress state interface for tracking activities and errors

## Properties

### activity

> **activity**: `Set`\<`string`\>

Defined in: [src/state/progress.ts:9](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/progress.ts#L9)

Set of active activity identifiers - using Set for O(1) lookups and automatic deduplication

***

### error

> **error**: `string`

Defined in: [src/state/progress.ts:12](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/progress.ts#L12)

Current error message, empty string when no error

***

### addActivity()

> **addActivity**: (`act`) => `void`

Defined in: [src/state/progress.ts:15](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/progress.ts#L15)

Add a new activity to the tracking set

#### Parameters

##### act

`string`

#### Returns

`void`

***

### removeActivity()

> **removeActivity**: (`act`) => `void`

Defined in: [src/state/progress.ts:18](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/progress.ts#L18)

Remove an activity from the tracking set

#### Parameters

##### act

`string`

#### Returns

`void`

***

### setError()

> **setError**: (`error`) => `void`

Defined in: [src/state/progress.ts:21](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/progress.ts#L21)

Set/update the current error message

#### Parameters

##### error

`string`

#### Returns

`void`
