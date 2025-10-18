import pokemons from "./pokemons.js";
const pokemonContainer = document.getElementById("pokemonContainer")
const searchInput = document.getElementById("searchInput")
const filterType = document.getElementById("filterType")
const sortBy = document.getElementById("sortBy")
const searchButton = document.getElementById("searchButton")
function generator(pokemon){
    pokemonContainer.innerHTML = '';
    pokemon.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${pokemon.name}</h3>
            <img src="${pokemon.img}" alt="">
            <p>${pokemon.type}</p>
            <p>${pokemon.weight}</p>
        `;
        pokemonContainer.appendChild(card)
    });
}
function filter() {
    let filterPokemons = pokemons
    if (sortBy.value == 'alphabeticalAsc'){
        filterPokemons.sort((a,b)=>(a.name.localeCompare(b.name)))
    }else if (sortBy.value == 'alphabeticalDesc'){
        filterPokemons.sort((a,b)=>(b.name.localeCompare(a.name)))
    }else if (sortBy.value == 'weightAsc'){
        filterPokemons.sort((a,b)=>parseFloat(a.weight)-parseFloat(b.weight))
    }else if (sortBy.value == 'weightDesc'){
        filterPokemons.sort((a,b)=>parseFloat(b.weight)-parseFloat(a.weight))
    }
    generator(filterPokemons)
}
generator(pokemons);
searchButton.addEventListener('click', filter)