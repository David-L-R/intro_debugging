const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/clean-code-challenge/solution1");

// present all character from the house Gryffindor
const gryffindors = characters.filter((x) => x.house === "gryffindor");

console.log(
  "Exercie passed: ",
  JSON.stringify(gryffindors) === JSON.stringify(solution)
);
