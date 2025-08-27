[**@trustgraph/client**](../../README.md)

***

[@trustgraph/client](../../README.md) / [index](../README.md) / Ontology

# Interface: Ontology

Defined in: [src/state/ontologies.ts:74](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/ontologies.ts#L74)

Complete ontology structure with metadata, concepts, and scheme

## Properties

### metadata

> **metadata**: [`OntologyMetadata`](OntologyMetadata.md)

Defined in: [src/state/ontologies.ts:76](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/ontologies.ts#L76)

Ontology metadata

***

### concepts

> **concepts**: `Record`\<`string`, [`OntologyConcept`](OntologyConcept.md)\>

Defined in: [src/state/ontologies.ts:78](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/ontologies.ts#L78)

Map of concept IDs to concepts

***

### scheme

> **scheme**: [`OntologyScheme`](OntologyScheme.md)

Defined in: [src/state/ontologies.ts:80](https://github.com/trustgraph-ai/trustgraph-ts-client/blob/92e187771a25b959c85a4f966bb97eb5d407310b/src/state/ontologies.ts#L80)

Concept scheme definition
