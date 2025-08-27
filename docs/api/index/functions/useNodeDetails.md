[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / useNodeDetails

# Function: useNodeDetails()

> **useNodeDetails**(`nodeId`, `flowId`): `object`

Defined in: [src/state/node-details.ts:45](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/4700024d623d01d40c50072d60c021f3b6c60b54/src/state/node-details.ts#L45)

Custom hook for managing node details operations
Provides functionality for fetching triples and processing outbound relationships
for a selected graph node

## Parameters

### nodeId

The ID of the selected node

`undefined` | `string`

### flowId

`string`

The flow ID to use for the query

## Returns

Node details state and processed data

### outboundTriples

> **outboundTriples**: `undefined` \| [`ApiTriple`](../interfaces/ApiTriple.md)[] = `outboundTriplesQuery.data`

### inboundTriples

> **inboundTriples**: `undefined` \| [`ApiTriple`](../interfaces/ApiTriple.md)[] = `inboundTriplesQuery.data`

### properties

> **properties**: `undefined` \| [`ApiTriple`](../interfaces/ApiTriple.md)[] = `propertiesQuery.data`

### triplesLoading

> **triplesLoading**: `boolean`

### propertiesLoading

> **propertiesLoading**: `boolean` = `propertiesQuery.isLoading`

### labelsLoading

> **labelsLoading**: `boolean`

### isLoading

> **isLoading**: `boolean`

### outboundTriplesLoading

> **outboundTriplesLoading**: `boolean` = `outboundTriplesQuery.isLoading`

### inboundTriplesLoading

> **inboundTriplesLoading**: `boolean` = `inboundTriplesQuery.isLoading`

### propertiesQueryLoading

> **propertiesQueryLoading**: `boolean` = `propertiesQuery.isLoading`

### outboundLabelsLoading

> **outboundLabelsLoading**: `boolean` = `outboundLabelsQuery.isLoading`

### inboundLabelsLoading

> **inboundLabelsLoading**: `boolean` = `inboundLabelsQuery.isLoading`

### propertyLabelsLoading

> **propertyLabelsLoading**: `boolean` = `propertyLabelsQuery.isLoading`

### triplesError

> **triplesError**: `boolean`

### propertiesError

> **propertiesError**: `boolean` = `propertiesQuery.isError`

### labelsError

> **labelsError**: `boolean`

### hasError

> **hasError**: `boolean`

### outboundTriplesError

> **outboundTriplesError**: `boolean` = `outboundTriplesQuery.isError`

### inboundTriplesError

> **inboundTriplesError**: `boolean` = `inboundTriplesQuery.isError`

### outboundLabelsError

> **outboundLabelsError**: `boolean` = `outboundLabelsQuery.isError`

### inboundLabelsError

> **inboundLabelsError**: `boolean` = `inboundLabelsQuery.isError`

### outboundTriplesErrorMessage

> **outboundTriplesErrorMessage**: `null` \| `Error` = `outboundTriplesQuery.error`

### inboundTriplesErrorMessage

> **inboundTriplesErrorMessage**: `null` \| `Error` = `inboundTriplesQuery.error`

### propertiesErrorMessage

> **propertiesErrorMessage**: `null` \| `Error` = `propertiesQuery.error`

### outboundLabelsErrorMessage

> **outboundLabelsErrorMessage**: `null` \| `Error` = `outboundLabelsQuery.error`

### inboundLabelsErrorMessage

> **inboundLabelsErrorMessage**: `null` \| `Error` = `inboundLabelsQuery.error`

### propertyLabelsErrorMessage

> **propertyLabelsErrorMessage**: `null` \| `Error` = `propertyLabelsQuery.error`

### outboundRelationships

> **outboundRelationships**: `string`[]

Process outbound triples to extract navigable relationships
Filters for entity relationships (o.e === true) and removes duplicates

### inboundRelationships

> **inboundRelationships**: `string`[]

Process inbound triples to extract navigable relationships
Filters for entity relationships (s.e === true) and removes duplicates

### propertyURIs

> **propertyURIs**: `string`[]

Process properties to extract unique property URIs
Properties are triples where o.e === false (literals)

### outboundRelationshipsWithLabels

> **outboundRelationshipsWithLabels**: `object`[]

Combine relationship URIs with their labels

### inboundRelationshipsWithLabels

> **inboundRelationshipsWithLabels**: `object`[]

### propertiesWithLabels

> **propertiesWithLabels**: `object`[]

Combine properties with their labels and values
Creates array of {predicate: {uri, label}, value} objects
Excludes label properties since they're already displayed at the top

### refetchOutbound()

> **refetchOutbound**: () => `void`

#### Returns

`void`

### refetchInbound()

> **refetchInbound**: () => `void`

#### Returns

`void`

### refetchProperties()

> **refetchProperties**: () => `void`

#### Returns

`void`

### refetch()

> **refetch**: () => `void`

#### Returns

`void`
