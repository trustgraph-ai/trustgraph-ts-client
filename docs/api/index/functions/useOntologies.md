[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useOntologies

# Function: useOntologies()

> **useOntologies**(): `object`

Defined in: [src/state/ontologies.ts:89](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/ontologies.ts#L89)

Custom hook for managing ontology operations
Provides functionality for fetching, creating, updating, and deleting ontologies

## Returns

`object`

Ontology state and operations

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
