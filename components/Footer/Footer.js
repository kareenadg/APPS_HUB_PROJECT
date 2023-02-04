import "./Footer.css";


const template = () => `
<div class="network">
<ul>
  <li>
      <a href="https://www.instagram.com/kareenadg/">
      <img src="/icons/instagram.png" id="Instagram" alt="Instagram icon"/>
      </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/kareenadg/">
    <img src="/icons/linkedin.png" alt="Linkedin icon"/>
    </a>
  </li>
  <li>
    <a href="https://github.com/kareenadg">
    <img src="/icons/github.png" alt="Github icon"/>
    </a>
  </li>
</ul>
</div>
<section class="creator"><h2>Powered by Kareen A.</h2></section>
`;

export const printTemplate = () => {
    document.querySelector("footer").innerHTML = template();
};