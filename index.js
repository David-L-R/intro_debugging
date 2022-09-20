const user = {
  name: "david",
  age: 35,
  kids: ["gabriel", "aaron"],
  profession: {
    type: "mentor",
    exp: 15,
    rated: {
      official: 2400,
    },
  },
};

const user2 = {
  ...user,
  kids: [...user.kids],
  profession: { ...user.profession, rated: { ...user.profession.rated } },
}; // COPY 🎉🎉🎉🎉

// let user2 = user; //THIS IS A BIG NO NO!

// primitive types

// number, string, boolean

// non primitve types

// objects, arrays

user2.name = "noam";
user2.age = 28;

user2.kids.push("Sarah");

console.log("user", user);
console.log("user2", user2);

// console.log(user.kids);
// WHAT WILL BE CONSOLED?
//  ("gabriel", "aaron")

// const age = 35;

// let age2 = 35;

// age2 = 28;

// console.log("age", age);
// console.log("age2", age2);
