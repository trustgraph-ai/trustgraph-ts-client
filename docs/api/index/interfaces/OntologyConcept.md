[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / OntologyConcept

# Interface: OntologyConcept

Defined in: [src/state/ontologies.ts:32](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L32)

Individual concept within an ontology (SKOS-based)

## Properties

### id

> **id**: `string`

Defined in: [src/state/ontologies.ts:34](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L34)

Unique identifier for the concept

***

### prefLabel

> **prefLabel**: `string`

Defined in: [src/state/ontologies.ts:36](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L36)

Preferred label for display

***

### altLabel?

> `optional` **altLabel**: `string`[]

Defined in: [src/state/ontologies.ts:38](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L38)

Alternative labels/synonyms

***

### definition?

> `optional` **definition**: `string`

Defined in: [src/state/ontologies.ts:40](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L40)

Formal definition of the concept

***

### scopeNote?

> `optional` **scopeNote**: `string`

Defined in: [src/state/ontologies.ts:42](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L42)

Scope note explaining usage

***

### example?

> `optional` **example**: `string`[]

Defined in: [src/state/ontologies.ts:44](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L44)

Usage examples

***

### notation?

> `optional` **notation**: `string`

Defined in: [src/state/ontologies.ts:46](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L46)

Notation code

***

### broader?

> `optional` **broader**: `null` \| `string`

Defined in: [src/state/ontologies.ts:48](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L48)

Parent concept URI (broader term)

***

### narrower?

> `optional` **narrower**: `string`[]

Defined in: [src/state/ontologies.ts:50](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L50)

Child concept URIs (narrower terms)

***

### related?

> `optional` **related**: `string`[]

Defined in: [src/state/ontologies.ts:52](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L52)

Related concept URIs

***

### topConcept?

> `optional` **topConcept**: `boolean`

Defined in: [src/state/ontologies.ts:54](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L54)

Whether this is a top-level concept
