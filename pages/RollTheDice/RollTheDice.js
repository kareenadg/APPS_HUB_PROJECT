import "./RollTheDice.css";
import { printTemplate as HubTemplate } from "../Hub/Hub";
import { printTemplate as LoginTemplate } from "../Login/Login";

const diceSides = ["https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536370/APP_HUB_PROJECT/ROLL_THE_DICE/side1_hpdplb.png", "https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536370/APP_HUB_PROJECT/ROLL_THE_DICE/side2_voqve4.png", "https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536370/APP_HUB_PROJECT/ROLL_THE_DICE/side3_yivtd0.png", "https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536370/APP_HUB_PROJECT/ROLL_THE_DICE/side4_zqgg7f.png", "https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536370/APP_HUB_PROJECT/ROLL_THE_DICE/side5_bfrk1b.png", "https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536370/APP_HUB_PROJECT/ROLL_THE_DICE/side6_gnfakp.png"];

const rollDice = (min = 0, max = 5) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const template = () => `
<section class="RollDice" id="RollDice">
<h2>ROLL THE DICE</h2>
<div class="btn">
<button class="backBtn" id="backBtn">←BACK</button>
<button class="logoutBtn" id="logoutBtn">Log Out</button>
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