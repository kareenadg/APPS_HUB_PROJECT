import "./Header.css";

const template = () => `
<div class="header">
<button type="button" id="themeBtn">🎨</button>
<div>
`;


const randomNumber = () => { 
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  return  "rgb(" + x + "," + y + "," + z + ")";
};

const addListeners = () => {
  document.querySelector("#themeBtn").addEventListener("click", () =>
  document.body.style.backgroundColor = randomNumber()
  )
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
} 