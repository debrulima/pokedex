const urlParams = new URLSearchParams(window.location.search);
const pokemonNumber = urlParams.get('pokemon');

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then(response => response.json())
    .then(pokemon => {
        document.getElementById('pokemonName').textContent = pokemon.name;
        document.getElementById('pokemonPhoto').src = pokemon.sprites.other.dream_world.front_default;
        document.getElementById('pokemonNumber').textContent = `#${pokemon.id}`;
        document.getElementById('pokemonTypes').textContent = pokemon.types.map(typeSlot => typeSlot.type.name).join(', ');
        document.getElementById('pokemonAbilities').textContent = pokemon.abilities.map(abilitySlot => abilitySlot.ability.name).join(', ');
        document.getElementById('pokemonStats').textContent = pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');
    })
    .catch(error => console.error('Erro ao buscar detalhes do Pokémon:', error));
