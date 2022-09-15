const characters = require("../../data/harry_potter/characters.json");

const halfBloodNotMales = characters.filter(
  (character) =>
    character.ancestry === "half-blood" && character.gender !== "male"
);

module.exports = halfBloodNotMales;
