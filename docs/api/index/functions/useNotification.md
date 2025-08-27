[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useNotification

# Function: useNotification()

> **useNotification**(): `object`

Defined in: [src/state/notify.ts:104](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/notify.ts#L104)

Hook for managing notifications in a UI-agnostic way
Provides methods to emit notifications and manage notification state

## Returns

### success()

> **success**: (`message`, `options?`) => `void`

Display a success notification

#### Parameters

##### message

`string`

The success message to display

##### options?

`Partial`\<[`NotificationConfig`](../../types/interfaces/NotificationConfig.md)\>

Optional configuration

#### Returns

`void`

### error()

> **error**: (`message`, `options?`) => `void`

Display an error notification

#### Parameters

##### message

`string`

The error message to display

##### options?

`Partial`\<[`NotificationConfig`](../../types/interfaces/NotificationConfig.md)\>

Optional configuration

#### Returns

`void`

### warning()

> **warning**: (`message`, `options?`) => `void`

Display a warning notification

#### Parameters

##### message

`string`

The warning message to display

##### options?

`Partial`\<[`NotificationConfig`](../../types/interfaces/NotificationConfig.md)\>

Optional configuration

#### Returns

`void`

### info()

> **info**: (`message`, `options?`) => `void`

Display an informational notification

#### Parameters

##### message

`string`

The info message to display

##### options?

`Partial`\<[`NotificationConfig`](../../types/interfaces/NotificationConfig.md)\>

Optional configuration

#### Returns

`void`

### dismiss()

> **dismiss**: (`id`) => `void`

Remove a specific notification by ID

#### Parameters

##### id

`string`

The notification ID to remove

#### Returns

`void`

### clearAll()

> **clearAll**: () => `void`

Clear all notifications

#### Returns

`void`

### getRecent()

> **getRecent**: (`limit?`) => [`NotificationConfig`](../../types/interfaces/NotificationConfig.md)[]

Get recent notifications for display

#### Parameters

##### limit?

`number`

Maximum number of notifications to return

#### Returns

[`NotificationConfig`](../../types/interfaces/NotificationConfig.md)[]
