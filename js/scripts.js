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

//     let modalContainer = document.querySelector('#modal-container');
//     function showModal(item) {
//         modalContainer.innerHTML = '';
//         let modal = document.createElement('div');
//         modal.classList.add('modal');

//         let closeButtonElement = document.createElement('button');
//         closeButtonElement.classList.add('modal-close');
//         closeButtonElement.innerText = 'Close';
//         closeButtonElement.addEventListener('click', hideModal);

//         let titleElement = document.createElement('h1');
//         titleElement.innerText = item.name;

//         let contentElement = document.createElement('p');
//         contentElement.innerText = "Height:" + item.height;

//         let typeElement = document.createElement('p');
//         typeElement.innerText = "Type of Pokemon:" + " " + item.types;

//         let pokemonImage = document.createElement('img');
//         pokemonImage.src = item.imageUrl;

//         modal.appendChild(closeButtonElement);
//         modal.appendChild(titleElement);
//         modal.appendChild(contentElement);
//         modal.appendChild(pokemonImage);
//         modal.appendChild(typeElement);
//         modalContainer.appendChild(modal);

//         modalContainer.classList.add('is-visible');
//     }

//     let dialogPromiseReject;

//     function hideModal() {
//         let modalContainer = document.querySelector('#modal-container');
//         modalContainer.classList.remove('is-visible');

//         if (dialogPromiseReject) {
//             dialogPromiseReject();
//             dialogPromiseReject = null;
//         }
//     }

//     function showDialog(title, text) {
//         showModal (title, text);

//         let modal = modalContainer.querySelector('.modal');

//         let confirmButton = document.createElement('button');
//         confirmButton.classList.add('modal-confirm');
//         confirmButton.innerText = 'Confirm';

//         let cancelButton = document.createElement('button');
//         cancelButton.classList.add('modal-cancel');
//         cancelButton.innerText = 'Cancel';

//         modal.appendChild(confirmButton);
//         modal.appendChild(cancelButton);

//         confirmButton.focus();
//         return new Promise((resolve, reject) => {
//             cancelButton.addEventListener('click', hideModal);
//             confirmButton.addEventListener('click', () => {
//                 dialogPromiseReject = null;
//                 hideModal();
//                 resolve();
//             });

//             dialogPromiseReject = reject;
//         });
//     }

//     document.querySelector('#show-dialog').addEventListener('click', () => {
//         showDialog('Confirm action', 'Are you sure you want to do this?').then (function () {
//             alert('confirmed');
//         }, () => {
//             alert('not confirmed');
//         });
//     });

//     window.addEventListener('keydown', (e) => {
//         if (e.key === 'Escape' && modalContainer.classList.contains('is-visible'))
//     {
//         hideModal();
//     }
// });

//     modalContainer.addEventListener('click', (e) => {
//         let target = e.target;
//         if (target === modalContainer) {
//             hideModal();
//         }
//     });

//     document.querySelector('#show-modal').addEventListener('click', () => {
//         showModal('Modal title', 'This is the modal content!');
//     });

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
