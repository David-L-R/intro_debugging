const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/clean-code-challenge/solution2");
// present all character from the house Gryffindor

const gryffindors = characters.filter((x) => {
  x.house === "Gryffindor";
});

console.log(
  "Exercie 2 passed: ",
  JSON.stringify(gryffindors) === JSON.stringify(solution)
);
