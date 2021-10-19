let pokemonList = [
    {name: 'Bulbasaur', height: 0.7,  type:['grass', 'poison']}, 
    {name: 'Charmander', height: 0.6, type: 'fire' },
    {name: 'Squirtle', height: 0.5, type: 'water'}
];

pokemonList.forEach(function(pokemon)){
    document.write(pokemon.name + ' is ' + pokemon.height + ' meters tall ' 
    + ' is a ' + pokemon.type + ' type of Pokemon ');
}



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
    
