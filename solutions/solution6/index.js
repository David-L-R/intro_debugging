import characters from "../../data/harry_potter/characters.json" assert { type: "json" };

const characterContainer = document.getElementById("main");

/* NO NEED TO CHANGE  */
const cleanCardContainer = () => {
  characterContainer.innerHTML = "";
};

const createCards = (characters) => {
  cleanCardContainer();

  if (characters.length === 0) {
    const textElement = document.createElement("p");
    const text = document.createTextNode("No character matches the filter");
    textElement.appendChild(text);
    characterContainer.appendChild(textElement);
    return;
  }

  characters.forEach((character) => {
    const { name, image, house, species, gender } = character;
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.setAttribute("src", image);

    const mainCardContainer = document.createElement("div");
    mainCardContainer.classList.add("card-container");

    const logo = document.createElement("img");
    logo.setAttribute("src", `./assets/${house}.webp`);

    const textContainer = document.createElement("div");
    textContainer.classList.add("card-text-container");

    const titleElement = document.createElement("h2");
    const titleText = document.createTextNode(name);
    titleElement.appendChild(titleText);

    const speciesElement = document.createElement("span");
    speciesElement.classList.add(`tag`);
    const speciesText = document.createTextNode(species);
    speciesElement.appendChild(speciesText);

    const genderElement = document.createElement("span");
    const genderText = document.createTextNode(gender);
    genderElement.classList.add(`tag-${gender}`);
    genderElement.classList.add(`tag`);
    genderElement.appendChild(genderText);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const button = document.createElement("button");
    const buttonText = document.createTextNode("Choose");
    button.classList.add(`choose-button`);
    button.setAttribute("id", character.id);
    button.appendChild(buttonText);
    buttonContainer.appendChild(button);

    card.appendChild(img);

    card.appendChild(mainCardContainer);

    mainCardContainer.appendChild(textContainer);
    if (character.house) {
      mainCardContainer.appendChild(logo);
    }
    if (characters.length !== 1) {
      card.appendChild(buttonContainer);
    }
    textContainer.appendChild(titleElement);
    textContainer.appendChild(speciesElement);
    textContainer.appendChild(genderElement);

    characterContainer.appendChild(card);
  });
};

createCards(characters);

/* ABOVE HERE, DO NOT CHANGE */

/* FROM HERE, ALL CODE BELOW CAN BE CHANGED AND REFACTORED */

const charactersWithIds = characters.map((character, index) => {
  return {
    id: index,
    ...character,
  };
});

const chooseRandomButton = document.getElementById("choose-random");

chooseRandomButton.addEventListener("click", () => {
  const random = Math.floor(Math.random() * charactersWithIds.length);
  createCards([charactersWithIds[random]]);
});

const addEventListenerToChooseButtons = () => {
  const chooseButtons = Array.from(
    document.getElementsByClassName("choose-button")
  );

  chooseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log("clicked", e.target.id);
      createCards([charactersWithIds[e.target.id]]);
    });
  });
};

addEventListenerToChooseButtons();

const selects = document.getElementsByTagName("select");

const resetButton = document.getElementById("reset-button");
const reset = () => {
  Array.from(selects).forEach((select) => {
    select.value = "all";
  });
  createCards(charactersWithIds);
};

resetButton.addEventListener("click", reset);

const filterButton = document.getElementById("filter-button");
const filter = () => {
  let filtered = [...charactersWithIds];
  Array.from(selects).forEach((select) => {
    if (select.value === "all") return true;
    filtered = filtered.filter(
      (character) => character[select.name].toLowerCase() === select.value
    );
  });
  createCards(filtered);
  addEventListenerToChooseButtons();
};

filterButton.addEventListener("click", filter);
