const characters = require("../data/harry_potter/characters.json");

const formattedCharacters = characters.map((character) => {
  const { name, alternate_names, gender, species, ancestry, house } = character;
  return {
    names: [name, ...alternate_names],
    type: [species, ancestry, gender],
    house,
  };
});

module.exports = formattedCharacters;
