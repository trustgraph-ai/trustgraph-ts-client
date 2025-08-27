[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / Ontology

# Interface: Ontology

Defined in: [src/state/ontologies.ts:74](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L74)

Complete ontology structure with metadata, concepts, and scheme

## Properties

### metadata

> **metadata**: [`OntologyMetadata`](OntologyMetadata.md)

Defined in: [src/state/ontologies.ts:76](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L76)

Ontology metadata

***

### concepts

> **concepts**: `Record`\<`string`, [`OntologyConcept`](OntologyConcept.md)\>

Defined in: [src/state/ontologies.ts:78](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L78)

Map of concept IDs to concepts

***

### scheme

> **scheme**: [`OntologyScheme`](OntologyScheme.md)

Defined in: [src/state/ontologies.ts:80](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/dd779923b4eaffccd17ba61aaee70d2766e28e49/src/state/ontologies.ts#L80)

Concept scheme definition
