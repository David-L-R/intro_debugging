const characters = require("../data/harry_potter/characters.json");
const solution = require("../solutions/clean-code-challenge/solution3");
// Present all characters that
// their ancestry is half-blood
// and their gender is not male

// TIP: should be only 6 characters

const halfBloodNotMales = characters.filter((x) => {
  if ((x.ancestry = "half-blood")) {
    if (x.gender != "male") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});

console.log(
  "Exercie 3 passed: ",
  JSON.stringify(halfBloodNotMales) === JSON.stringify(solution)
);
