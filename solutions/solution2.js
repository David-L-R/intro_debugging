const characters = require("../data/harry_potter/characters.json");
// present all character from the house Gryffindor

const gryffindors = characters.filter((character) => {
  return character.house === "Gryffindor";
});

module.exports = gryffindors;
