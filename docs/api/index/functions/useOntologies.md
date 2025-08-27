[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useOntologies

# Function: useOntologies()

> **useOntologies**(): `object`

Defined in: [src/state/ontologies.ts:43](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/24d0d0886a310c1fecf9e6fc95cd3a24cf32c92e/src/state/ontologies.ts#L43)

## Returns

`object`

### ontologies

> **ontologies**: `any`[][]

### ontologiesLoading

> **ontologiesLoading**: `boolean` = `ontologiesQuery.isLoading`

### ontologiesError

> **ontologiesError**: `null` \| `Error` = `ontologiesQuery.error`

### updateOntology

> **updateOntology**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `ontology`: [`Ontology`](../interfaces/Ontology.md); `onSuccess?`: () => `void`; \}, `unknown`\> = `updateOntologyMutation.mutate`

### isUpdatingOntology

> **isUpdatingOntology**: `boolean` = `updateOntologyMutation.isPending`

### createOntology

> **createOntology**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `ontology`: [`Ontology`](../interfaces/Ontology.md); `onSuccess?`: () => `void`; \}, `unknown`\> = `createOntologyMutation.mutate`

### isCreatingOntology

> **isCreatingOntology**: `boolean` = `createOntologyMutation.isPending`

### deleteOntology

> **deleteOntology**: `UseMutateFunction`\<`void`, `Error`, \{ `id`: `string`; `onSuccess?`: () => `void`; \}, `unknown`\> = `deleteOntologyMutation.mutate`

### isDeletingOntology

> **isDeletingOntology**: `boolean` = `deleteOntologyMutation.isPending`

### refetch()

> **refetch**: () => `void`

#### Returns

`void`
