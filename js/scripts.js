let pokemonRepository = (function () {
  let pokemonList = [

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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push (pokemon);
  }
  return {
    getAll: getAll,
    add: add
  };

})();

pokemonRepository.add({ name: 'Snorlax'});
console.log( pokemonRepository.getAll() );
