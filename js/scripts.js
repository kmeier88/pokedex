let pokemonList = [
    {name: 'Bulbasaur', height: 0.7,  type:['grass', 'poison']}, 
    {name: 'Charmander', height: 0.6, type: 'fire' },
    {name: 'Squirtle', height: 0.5, type: 'water'}
];

for (let i=0; i < pokemonList.length; i++){
    if (pokemonList[i].height <0.8 && pokemonList[i].height >0.4){
        document.write(pokemonList[i].name + pokemonList[i].height + ' is an average sized pokemon'); 
    }else if (pokemonList[i].height <0.4){
                document.write(pokemonList[i].name + pokemonList[i].height + ' is a small pokemon');
    }else 
            document.write(pokemonList[i].name + pokemonList[i].height + ' is a large pokemon');
    }
    
        