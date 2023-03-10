import "./Login.css";
import { printTemplate as HubTemplate } from "../Hub/Hub";

 const template = () => `
    <section class="Login" id="Login">
    <h1>Neoland Hub-Games</h1>
    <div class="box">
    <label>Please, enter your name:</label>
    <input type='text' id='name' placeholder="Name" />
    <button class="loginBtn" id='loginBtn'>Log in</button>
    </div>
    </section>
    `;


const addListeners = () => {
    const myInput = document.querySelector("#name");
    document.querySelector(".loginBtn").addEventListener("click", () => 
    {localStorage.setItem("user", myInput.value);
    if (myInput.value){
    HubTemplate()};
})};


export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
};