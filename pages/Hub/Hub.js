import "./Hub.css";
import { initContent } from "../../main";
import { printTemplate as LoginTemplate } from "../Login/Login";


const template = () => `
    <section class="Hub" id="Hub">
    <h2>Welcome to my Hub, ${localStorage.getItem("user")}!</h2>
    <div class="mybtn">
    <button class="logoutBtn" id="logoutBtn">Log Out</button>
    </div>
    <div class="apps-container">
    <button id='pokeapi'>
    <img src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536434/APP_HUB_PROJECT/POKE_API/pokemon_adw4tq.png" alt="Pokemon icon"/>
    </button>
    <button id='rolldice'>
    <img src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536354/APP_HUB_PROJECT/ROLL_THE_DICE/dice_nr6scs.png" alt="Dice icon"/>
    </button>
    <button id='rockpaper'>
    <img src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536486/APP_HUB_PROJECT/ROCK_PAPER_SCISSORS/rockpaper_exl3ct.png" alt="Rock Paper Scissors icon"/>
    </button>
    </div>
    </section>
    `;


const addListeners = () => {
    document.querySelector("#logoutBtn").addEventListener("click", () =>
    LoginTemplate());
    document.querySelector("#pokeapi").addEventListener("click", () =>
    initContent("PokeApi"));
    document.querySelector("#rolldice").addEventListener("click", () => initContent("RollDice"));
    document.querySelector("#rockpaper").addEventListener("click", () => initContent("RockPaper"));
}


export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners(); 
};