const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/solution4");
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
  return {
    names: [character.name, character.alternate_names],
    type: [character.gender, character.species, character.ancestry],
    house: house,
  };
});

console.log(
  "Exercie passed: ",
  JSON.stringify(formattedCharacters) === JSON.stringify(solution)
);
