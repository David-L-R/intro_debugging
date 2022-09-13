const characters = require("./data/harry_potter/characters.json");

// filter all characters that are male, and present an object only with the name and house
/*
    {
        name,
        house,
    }
*/

const formattedCharacters = characters.map((character) => {
  if (character.gender == "male") {
    return {
      name: character.name,
      house: character.house,
    };
  }
});

// console.log(formattedCharacters);

const obj = {};

characters.forEach((c) => {
  obj[c.species] = 1;
});

console.log(obj);
