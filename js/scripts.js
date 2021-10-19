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
    button.innerText = 'placeHolder';
    button.classList.add('button-class')
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
});

// pokemonList.forEach(function(pokemon) {
//     return(pokemon.name + ' is ' + pokemon.height + ' meters tall ' 
//     + ' is a ' + pokemon.type + ' type of Pokemon ');
// });



// for (let i=0; i <pokemonList.length; i++){
//     document.write('<p>' + pokemonList[i].name + '</p>');
// }


// for (let i=0; i < pokemonList.length; i++){
//     if (pokemonList[i].height <0.8 && pokemonList[i].height >0.4){
//         document.write('<p>' + pokemonList[i].name + ' ' + pokemonList[i].height + ' is an average sized pokemon' + '</p>'); 
//     }else if (pokemonList[i].height <0.4){
//                 document.write('<p>' + pokemonList[i].name + ' ' + pokemonList[i].height + ' is a small pokemon' + '</p>');
//     }else 
//             document.write('<p>' + pokemonList[i].name + ' ' + pokemonList[i].height + ' is a large pokemon' + '</p>');
//     }
    
