let pokemonRepository = (function () {
    let pokemonList = [
        {name: 'Bulbasaur', height: 0.7,  type:['grass','poison']}, 
        {name: 'Charmander', height: 0.6, type: 'fire' },
        {name: 'Squirtle', height: 0.5, type: 'water'}
];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function getAll () {
    return pokemonList;
}

function add(pokemon) {
    pokemonList.push(pokemon);
}

function addListItem (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class')
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function() { 
        showDetails(pokemon)
    });
}

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        console.log (pokemon);
    });
}

function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url
            };
            add(pokemon);
        });
    }).catch(function (e) {
        console.error(e);
    })
}

function loadDetails (item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
    }).catch(function (e) {
        console.error(e);
    });
}

return {
    getAll: getAll,
    add: add,
    loadList: loadList,
    loadDetails: loadDetails
};
})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});


    
