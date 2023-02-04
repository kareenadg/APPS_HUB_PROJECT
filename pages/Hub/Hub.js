import "./Hub.css";
import { initContent } from "../../main";
import { printTemplate as LoginTemplate } from "../Login/Login";


const template = () => `
    <section id="Hub">
    <h2>Welcome to my hub, ${localStorage.getItem("user")}!</h2>
    <button id="logoutBtn">Log Out</button>
    <div class="apps-container">
    <button id='pokeapi'>
    <img src="/icons/pokemon.png" alt="Pokemon icon"/>
    </button>
    <button id='pokeshop'>
    <img src="/icons/pokeball.png" alt="Pokeball icon"/>
    </button>
    <button id='rolldice'>
    <img src="/icons/dice.png" alt="Dice icon"/>
    </button>
    <button id='rockpaper'>
    <img src="/icons/rockpaper.png" alt="Rock Paper Scissors icon"/>
    </button>
    </div>
    </section>
    `;


const addListeners = () => {
    document.querySelector("#logoutBtn").addEventListener("click", () =>
    LoginTemplate());
    document.querySelector("#pokeapi").addEventListener("click", () =>
    initContent("PokeApi"));
    document.querySelector("#pokeshop").addEventListener("click", () => initContent("PokeShop"));
    document.querySelector("#rolldice").addEventListener("click", () => initContent("RollDice"));
    document.querySelector("#rockpaper").addEventListener("click", () => initContent("RockPaper"));
}


export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners(); 
};