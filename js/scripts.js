let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function getAll () {
    return pokemonList;
}

function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon
    ) {
    pokemonList.push(pokemon);
    } else {
        console.log("pokemon error");
    }
}

function addListItem (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    listPokemon.classList.add('group-list-item');
    button.innerText = pokemon.name;
    button.classList.add('btn-primary');
    button.setAttribute("data-target", "#exampleModal");
    button.setAttribute("data-toggle", "modal");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener('click', function() { 
        showDetails(pokemon)
    });
}

function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        showModal(pokemon);
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
        item.types = [];
            details.types.forEach(function (itemType){
                item.types.push(itemType.type.name);
            });
    }).catch(function (e) {
        console.error(e);
    });
}

    function showModal(item) {
        let modalBody = $(".modal-body");
        let modalTitle = $(".modal-title");
        let modalHeader = $(".modal-header");

        modalTitle.empty();
        modalBody.empty();

        let nameElement = $('<h1>' + item.name + '</h1>');
        let imageElement = $('<img class = "modal-img" style="width:50%">');
        imageElement.attr("src", item.imageUrl);
        let heightElement = $("<p>" + "Height: " + item.height + "</p>");
        let weightElement = $("<p>" + "weight: " + item.weight + "</p>");
        let typesElement = $("<p>" + "Type: " + item.types + "</p>");

        modalTitle.append(nameElement);
        modalBody.append(imageElement);
        modalBody.append(heightElement);
        modalBody.append(typesElement);
    }

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
};
})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
    });
});
