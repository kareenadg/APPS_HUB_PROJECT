import "./RollTheDice.css";
import { printTemplate as HubTemplate } from "../Hub/Hub";
import { printTemplate as LoginTemplate } from "../Login/Login";

const diceSides = ["../../public/dicesides/side1.png", "../../public/dicesides/side2.png", "../../public/dicesides/side3.png", "../../public/dicesides/side4.png", "../../public/dicesides/side5.png", "../../public/dicesides/side6.png"]


const rollDice = (min = 0, max = 5) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const template = () => `
<section id="RollDice">
<h2>ROLL THE DICE</h2>
<div class="btn">
<button id="backBtn">Back</button>
<button id="logoutBtn">Log Out</button>
</div>
<div class="dice-container">
<img src="${diceSides[rollDice()]}" alt="Dice picture" />
<button id='rollBtn'>ROLL!</button>
</div>
</section>
`;

const addListeners = () => {
    document.querySelector("#backBtn").addEventListener("click", () =>
    HubTemplate());
    document.querySelector("#logoutBtn").addEventListener("click", () =>
    LoginTemplate());
    document.querySelector("#rollBtn").addEventListener("click", () => {
    printTemplate();
    })
}


export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
};