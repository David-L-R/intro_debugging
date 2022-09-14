const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/solution5");

// filter all characters that are
// 1. male
// 2. human
// 3. belong to one of the house (the house should not be an empty field)

// and present an object only with the name and house
/*
    {
        name,
        house,
    }
*/

// HINT: there should only be 83 of them

const formattedCharacters = characters.map((character) => {
  if (
    (character.gender == "male" && character.species == "human") ||
    character.house !== null
  ) {
    return {
      name: character.name,
      house: character.house,
    };
  }
});

console.log(
  "Exercie 5 passed: ",
  JSON.stringify(formattedCharacters) === JSON.stringify(solution)
);
