//seleccionar elementos
const input = document.querySelector('input');
const button = document.querySelector('button');
const pokemonContainer = document.querySelector('.pokemon-container');

//pasar datos al boton

button.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value);
})

//funcion fetch con arreglos
function traerPokemon(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((respuesta) => respuesta.json())
    .then((data) => {crearPokemon(data);});
}


//manda los datos del pokemon
function crearPokemon(pokemon){
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const expe = document.createElement('expe');
    expe.textContent = pokemon.base_experience;

   

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(expe);



    pokemonContainer.appendChild(div);

}


