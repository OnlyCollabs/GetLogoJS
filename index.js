import { getLogo } from "./getLogo.js";

const searchBar = document.querySelector(".search-bar");
const resultContainer = document.querySelector(".result-container");

searchBar.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const searchTerm = searchBar.value;
    resultContainer.innerHTML = "";
    getLogo(searchTerm).then((data) => {
      renderLogo(data);
    });
  }
});

function renderLogo(data) {
  const logo = document.createElement("img");
  logo.src = data;
  resultContainer.appendChild(logo);
}
