import { searchPokemon } from "./index.js";

const URL = `https://pokeapi.co/api/v2/pokemon/`
const buttonPrev = document.querySelector("#btnPrev");
const buttonNext = document.querySelector("#btnNext");
const textSearchFavorite = document.querySelector("#textSearchFavorite");
const sectionContainerList = document.querySelector("#sectionContainerList");

let paginaActual = 1;
let tamañoPagina = 10;
window.onload = async ()=>{
    buttonPrev.addEventListener("click", () => {
        paginaActual--;
        buttonPrev.classList.toggle("d-none", paginaActual <= 1);
        actualizarLista();
      });
      buttonNext.addEventListener("click", () => {
        paginaActual++;
        buttonPrev.classList.remove("d-none");
        actualizarLista();
      });
    await actualizarLista()
}
function mostrarLista(namePokemon, URL) {
    const ul = document.createElement("ul");
    const li = document.createElement("li");
  
    li.setAttribute(
      "class",
      "list-group-item list-group-item-warning rounded mt-1 border shadow-sm px-0 py-1 hand"
    );
    li.setAttribute("data-url",URL)
    li.textContent = namePokemon;
    ul.appendChild(li);
    sectionContainerList.appendChild(ul);
    ul.addEventListener("click", (event) => {
        console.log(event.target.textContent);
        console.log(event.target.dataset.url);
        textSearchFavorite.classList.add("d-none");
        searchPokemon(namePokemon, URL)
    });

}
async function actualizarLista() {
    let url = "https://pokeapi.co/api/v2/";
    sectionContainerList.innerHTML = "";
    const offset = (paginaActual - 1) * tamañoPagina;
    url += `pokemon/?limit=${tamañoPagina}&offset=${offset}`; 
    try {
      const response = await fetch(`${url}`);
      const { results } = await response.json();
      results.forEach(({ name, url }) => {
      mostrarLista(name, url);
      });
    } catch (err) {
      console.log(`Failed: ${err}`);
    }
  }