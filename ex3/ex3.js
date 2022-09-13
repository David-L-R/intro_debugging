const characters = require("../data/harry_potter/characters.json");

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

console.log(halfBloodNotMales);
// console.log(halfBloodNotMales.length);
