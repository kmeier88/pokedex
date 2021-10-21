var pokemonRepository = (function () {
var pokemonList = [
    {name: 'Bulbasaur', height: 0.7,  type:['grass','poison']}, 
    {name: 'Charmander', height: 0.6, type: 'fire' },
    {name: 'Squirtle', height: 0.5, type: 'water'}
];

function getAll () {
    return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add: add
};

} )();

pokemonRepository.getAll().forEach(function (pokemon) {

    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class')
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
});


    
