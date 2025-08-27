[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useActivity

# Function: useActivity()

> **useActivity**(`isActive`, `description`): `void`

Defined in: [src/state/activity.ts:20](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/activity.ts#L20)

Custom hook for managing activity notifications in the UI
Automatically adds/removes activity indicators based on a boolean condition

## Parameters

### isActive

`boolean`

Boolean condition that determines if activity
is ongoing

### description

`string`

Description text to display for the activity

## Returns

`void`

## Examples

```ts
// Show "Loading documents" while documentsQuery.isLoading is true
useActivity(documentsQuery.isLoading, "Loading documents");
```

```ts
// Show "Saving data" while mutation is pending
useActivity(saveMutation.isPending, "Saving data");
```
