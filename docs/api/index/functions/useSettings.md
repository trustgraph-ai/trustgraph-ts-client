[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useSettings

# Function: useSettings()

> **useSettings**(): `object`

Defined in: [src/state/settings.ts:68](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/edcc8c01cf9c2f58c76719d5d2aa7058546360d9/src/state/settings.ts#L68)

Custom hook for managing application settings
Uses TanStack Query for consistent async patterns while storing in localStorage
Ready for future backend integration when needed

## Returns

`object`

### settings

> **settings**: `Settings`

### isLoaded

> **isLoaded**: `boolean` = `!settingsQuery.isLoading`

### isLoading

> **isLoading**: `boolean` = `settingsQuery.isLoading`

### error

> **error**: `null` \| `Error` = `settingsQuery.error`

### updateSetting()

> **updateSetting**: (`path`, `value`) => `void`

#### Parameters

##### path

`string`

##### value

`unknown`

#### Returns

`void`

### saveSettings()

> **saveSettings**: (`newSettings`) => `void`

#### Parameters

##### newSettings

`Settings`

#### Returns

`void`

### resetSettings()

> **resetSettings**: () => `void`

#### Returns

`void`

### exportSettings()

> **exportSettings**: () => `string`

#### Returns

`string`

### importSettings()

> **importSettings**: (`jsonString`) => `void`

#### Parameters

##### jsonString

`string`

#### Returns

`void`

### isSaving

> **isSaving**: `boolean` = `updateSettingsMutation.isPending`

### isResetting

> **isResetting**: `boolean` = `resetSettingsMutation.isPending`

### refetch()

> **refetch**: (`options?`) => `Promise`\<`QueryObserverResult`\<`Settings`, `Error`\>\> = `settingsQuery.refetch`

#### Parameters

##### options?

`RefetchOptions`

#### Returns

`Promise`\<`QueryObserverResult`\<`Settings`, `Error`\>\>
