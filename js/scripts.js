let pokemonRepository = (function () {
  let repository = [
    {
      name: 'Bulbasaur',
      height: 2.04,
      types: ['Grass', 'Poison']
    },

    {
      name: 'Ivysaur',
      height: 3.03,
      types: ['Grass', 'Poison']
    },

    {
      name: 'Venusaur',
      height: 6.07,
      types: ['Grass', 'Poison']
    },

    {
      name: 'Charmander',
      height: 2.00,
      types: ['Fire']
    },

    {
      name: 'Charmeleon',
      height: 3.07,
      types: ['Fire']
    },

    {
      name: 'Charizard',
      height: 5.07,
      types: ['Fire', 'Flying']
    },

    {
      name: 'Squirtle',
      height: 1.08,
      types: ['Water']
    },

    {
      name: 'Wartortle',
      height: 3.03,
      types: ['Water']
    },

    {
      name: 'Blastoise',
      height: 5.03,
      types: ['Water']
    },
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log
    }
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener ('click', function(event){
    showDetails(pokemon);
    });
}

  function showDetails(pokemon) {
  		console.log(pokemon);
  	}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

pokemonRepository.add({ name: "Snorlax", height: 5.3, types: ["normal"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
