import { characters } from "./data.js";
const list = document.querySelector("#list");

const init = () => {
  const charactersHTML = characters
    .map(char => {
      const { name, occupation, image } = char;
      return `
  <li>
    <a href="#" class="person">
      <h2 class="person__name">${name}</h2>
       <h4 class="person__occupation">${occupation}</h4>
       <img class="person__image" src=${image} alt="picture of ${name}" />
    </a>
  </li>
  `;
    })
    .join("");

  list.innerHTML = charactersHTML;
};

window.addEventListener("DOMContentLoaded", init);
