const characters = require("./data/harry_potter/characters.json");

// format the data to create a new array
// in the new array, all object will be in this format:

/*
{
    names: ["...", ...all alternative names],
    type: [$species, $ancestry, $gender],
    house: $house
}
*/

// for example:

/*
{
    names: ['Lily Potter', 'Lily Luna Potter' ],
    type: ['human', 'half-blood', 'female'],
    house: 'Gryffindor'
}
*/

const formattedCharacters = characters.map((character) => {
  const { name, alternate_names, gender, species, ancestry, house } = character;
  return {
    names: [name, ...alternate_names],
    type: [species, ancestry, gender],
    house,
  };
});

console.log(formattedCharacters);
