import "./RockPaper.css";
import { printTemplate as HubTemplate } from "../Hub/Hub";
import { printTemplate as LoginTemplate } from "../Login/Login";

const Rock = "https://res.cloudinary.com/dlvbfzkt9/image/upload/c_scale,w_210/v1675536522/APP_HUB_PROJECT/ROCK_PAPER_SCISSORS/rock_jeyjxt.png";
const Paper = "https://res.cloudinary.com/dlvbfzkt9/image/upload/c_scale,w_210/v1675536522/APP_HUB_PROJECT/ROCK_PAPER_SCISSORS/paper_rbtii8.png";
const Scissors = "https://res.cloudinary.com/dlvbfzkt9/image/upload/c_scale,w_210/v1675536522/APP_HUB_PROJECT/ROCK_PAPER_SCISSORS/scissors_ja4yja.png";

const Rockbtn = document.querySelector("#rock");
const Paperbtn = document.querySelector("#paper");
const Scissorsbtn = document.querySelector("#scissors");

const getRandom = (min = 0, max = 2) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const template = () => `
<section class="RockPaperScissors" id="RockPaperScissors">
<h2>ROCK PAPER SCISSORS</h2>
<div class="btn">
<button class="backBtn" id="backBtn">←BACK</button>
<button class="logoutBtn" id="logoutBtn">Log Out</button>
</div>
<h3>Player: ${localStorage.getItem("user").toUpperCase()} VS. Computer</h3>
<div class="challenge-container">
<ul>
  <li>
  <button id="rock">
  <img src=${Rock} alt="rock pose"/>
  </button>
  </li>
  <li>
  <button id="paper">
  <img src=${Paper} alt="paper pose"/>
  </button>
  </li>
  <li>
  <button id="scissors">
  <img src=${Scissors} alt="scissors pose"/>
  </button>
  </li>
</ul>
<div class="myimg">
</div>
</div>
<div class="repeat">
<button class="playbtn">Play Again</button>
</div>
</section>
`;

const P1 = [Rockbtn, Paperbtn, Scissorsbtn];
const myImgs = [Rock, Paper, Scissors];


const Img = () => {
let P2 = myImgs[getRandom()];
const myImg = document.querySelector(".myimg");
myImg.innerHTML = `<img src="${P2}" alt="Rock Paper Scissors icon"/>`;
return P2};


const getPose = () => {
    const Rockbtn = document.querySelector("#rock");
    const Paperbtn = document.querySelector("#paper");
    const Scissorsbtn = document.querySelector("#scissors");
    Rockbtn.addEventListener("click", () =>
    {winner(Img(), "Rock")});
    Paperbtn.addEventListener("click", () => 
    {winner(Img(), "Paper")});
    Scissorsbtn.addEventListener("click", () => 
    {winner(Img(), "Scissors")});
};


const winner = (P2, P1) => {
    const choice = document.createElement("p");
    if((P1 == "Paper" && P2 == myImgs[0])||
    (P1 == "Rock" && P2 == myImgs[2])||
    (P1 == "Scissors" && P2 == myImgs[1])){
        choice.innerText = `${localStorage.getItem("user").toUpperCase()} WINS`;
        document.querySelector(".myimg").appendChild(choice);
    } else if((P2 == myImgs[1] && P1 == "Rock")||
    (P2 == myImgs[0] && P1 == "Scissors")||
    (P2 == myImgs[2] && P1 == "Paper")){
        choice.innerText = `Computer WINS`;
        document.querySelector(".myimg").appendChild(choice);
    } else if((P1 == "Paper" && P2 == myImgs[1])||
    (P1 == "Rock" && P2 == myImgs[0])||
    (P1 == "Scissors" && P2 == myImgs[2])){
        choice.innerText = `IT'S A DRAW!`;
        document.querySelector(".myimg").appendChild(choice);
    }
};


const addListeners = () => {
    document.querySelector("#backBtn").addEventListener("click", () =>
    HubTemplate());
    document.querySelector("#logoutBtn").addEventListener("click", () =>
    LoginTemplate());
    document.querySelector(".playbtn").addEventListener("click", () =>{
        document.querySelector("#RockPaperScissors").innerHTML = "";
        printTemplate();
    })
};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
    getPose();
};