import { getLogo } from "./getLogo.js";

const searchInput = document.querySelector(".js-search-input");
const searchForm = document.querySelector(".js-search-form");
const resultContainer = document.querySelector(".js-result-container");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;
  showFetchingMessage();
  getLogo(searchTerm).then((data) => {
    console.log(data);
    if (data != undefined) {
      renderLogo(data);
    } else {
      renderError();
    }
  });
});

function renderLogo(data) {
  clearContainer();
  resultContainer.classList.add("border-class");
  const logo = document.createElement("img");
  logo.src = data;
  resultContainer.appendChild(logo);
  
}

function clearContainer() {
  resultContainer.innerHTML = "";
}
function showFetchingMessage() {
  clearContainer();
  resultContainer.classList.remove("border-class");
  resultContainer.innerHTML = `<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>`;
}

function renderError() {
  clearContainer();
  resultContainer.classList.remove("border-class");
  resultContainer.innerHTML = `<p class="msg">Invalid url!</p>`;
}
