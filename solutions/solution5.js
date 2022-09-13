const characters = require("../data/harry_potter/characters.json");

module.exports = characters
  .filter(
    (character) =>
      character.gender === "male" &&
      character.species === "human" &&
      character.house
  )
  .map((character) => {
    const { name, house } = character;
    return {
      name,
      house,
    };
  });
