import "./PokeApi.css";
import { printTemplate as HubTemplate } from "../Hub/Hub";
import { printTemplate as LoginTemplate } from "../Login/Login";

const template = () => `
<section id="PokeApi">
<h2>POKÉDEX</h2>
<div class="btn">
<button id="backBtn">Back</button>
<button id="logoutBtn">Log Out</button>
</div>
<nav class="types-btn">
<button class="all">All</button>
</nav>
<div class="poke-container">
</div>
</section>
`
const types = ["grass", "poison", "fire", "water", "bug", "normal", "electric", "ground", "fairy", "fighting", "psychic", "rock", "ice", "ghost", "dragon"];


const BASEURL = "https://pokeapi.co/api/v2/pokemon/";

let mapPokemons = [];
let pokemons = [];
const getPokemons = async () => {
    for (let i = 1; i <= 150; i++) {
        const data = await fetch(`${BASEURL}${i}`);
        const info = await data.json();
        pokemons.push(info);
    }
    mappedPokes(pokemons);
};

const mappedPokes = () => {
mapPokemons = pokemons.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.other.dream_world.front_default,
    weight: pokemon.weight / 10,
    height: pokemon.height / 10,
    type: pokemon.types[0].type.name,
  }))
  printPokes(mapPokemons);
}

const printPokes = (pokemons) => {
    const pokeContainer = document.querySelector(".poke-container");
    pokeContainer.innerHTML = "";
    for (const pokemon of pokemons) {
        const myFigure = document.createElement("figure");
        myFigure.innerHTML = `
        <img src=${pokemon.image} alt='${pokemon.name}'/>
        <h2>${pokemon.name.toUpperCase()}</h2>
        <h3>${pokemon.id}</h3>
        <p>WEIGHT: ${pokemon.weight}KG | HEIGHT: ${pokemon.height}M</p>
        <p>TYPE: ${pokemon.type}</p>`;
        pokeContainer.appendChild(myFigure);
        }
}


const myTypes = () => {
    const myNav = document.querySelector(".types-btn");
    for (const type of types) {
        const myBtn = document.createElement("button");
        myBtn.innerHTML = `${type}`;
        myBtn.classList.add(`${type}`);
        myNav.appendChild(myBtn);
        myBtn.addEventListener("click", () => 
        printTypes(mapPokemons, `${type}`))
    }
}

const printTypes = (array, type) => {
    const myFilter = array.filter((pokemon) => pokemon.type === type);
    printPokes(myFilter);
}


const addListeners = () => {
    document.querySelector("#backBtn").addEventListener("click", () =>
    HubTemplate());
    document.querySelector("#logoutBtn").addEventListener("click", () =>
    LoginTemplate());
    document.querySelector(".all").addEventListener("click", () => 
    {document.querySelector(".poke-container").innerHTML = "";
     printPokes(mapPokemons);
    })
}

export const printTemplate = (mapPokemons) => {
    document.querySelector("main").innerHTML = template();
    addListeners();
    getPokemons();
    myTypes();
}


/* const typesBtn = document.querySelector(".types-btn");
 */