import "./RockPaper.css";
import { printTemplate as HubTemplate } from "../Hub/Hub";
import { printTemplate as LoginTemplate } from "../Login/Login";

const Rock = "../../public/rockpaper/rock.png";
const Paper = "../../public/rockpaper/paper.png";
const Scissors = "../../public/rockpaper/scissors.png";

const Rockbtn = document.querySelector("#rock");
const Paperbtn = document.querySelector("#paper");
const Scissorsbtn = document.querySelector("#scissors");

const getRandom = (min = 0, max = 2) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

const template = () => `
<section id="RockPaperScissors">
<h2>ROCK PAPER SCISSORS</h2>
<div class="btn">
<button id="backBtn">Back</button>
<button id="logoutBtn">Log Out</button>
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
</div>
<div class="repeat">
<button class="playbtn">Play Again</button>
</div>
</section>
`;

const P1 = [Rockbtn, Paperbtn, Scissorsbtn];
const myImgs = [Rock, Paper, Scissors];
let P2 = myImgs[getRandom()];


const Img = () => {
const myDiv = document.querySelector(".challenge-container");
const myImg = document.createElement("div");
myImg.classList.add("myimg");
myImg.innerHTML = `<img src="${P2}" alt="Rock Paper Scissors icon"/>`;
myDiv.appendChild(myImg)};


const getPose = () => {
    const Rockbtn = document.querySelector("#rock");
    const Paperbtn = document.querySelector("#paper");
    const Scissorsbtn = document.querySelector("#scissors");
    Rockbtn.addEventListener("click", () =>
    {Img();
    winner()});
    Paperbtn.addEventListener("click", () => 
    {Img();
    winner()});
    Scissorsbtn.addEventListener("click", () => 
    {Img();
    winner()});
};


const winner = () => {
    const choice = document.createElement("p");
    const alert = choice.innerText;
    if((P1 == Paperbtn && P2 == myImgs[0])||
    (P1 == Rockbtn && P2 == myImgs[2])||
    (P1 == Scissorsbtn && P2 == myImgs[1])){
        console.log(alert = `${localStorage.getItem("user").toUpperCase()} WINS`);
    } else if((P2 == myImgs[1] && P1 == Rockbtn)||
    (P2 == myImgs[0] && P1 == Scissorsbtn)||
    (P2 == myImgs[2] && P1 == Paperbtn)){
        console.log(alert = `Computer WINS`);
    } else if(P1 == P2){
        console.log(alert = `IT'S A DRAW!`);
    }
    document.querySelector(".myimg").appendChild(choice);
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