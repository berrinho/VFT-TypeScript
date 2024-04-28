"use strict";
console.log('Welcome to the species lookup');
function getSpecies(searchTerm) {
    return fetch(`https://api.gbif.org/v1/species/search?q=${encodeURIComponent(searchTerm)}&qField=VERNACULAR`)
        .then(response => response.json())
        .then(data => {
        const result = data.results[0];
        return {
            canonicalName: result.canonicalName,
            kingdom: result.kingdom,
            phylum: result.phylum,
            order: result.order,
            family: result.family,
            genus: result.genus,
            species: result.species,
            class: result.class,
            vernacularName: result.vernacularNames[0].vernacularName
        };
    });
}
getSpecies("hen").then(species => console.log(JSON.stringify(species, null, 2)));
