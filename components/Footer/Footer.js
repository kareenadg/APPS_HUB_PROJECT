import "./Footer.css";


const template = () => `
<div class="network">
<ul>
  <li>
      <a href="https://www.instagram.com/kareenadg/">
      <img src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675608770/APP_HUB_PROJECT/ICONS/instagram_ahshyk.png" id="Instagram" alt="Instagram icon"/>
      </a>
  </li>
  <li>
    <a href="https://www.linkedin.com/in/kareenadg/">
    <img src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536255/APP_HUB_PROJECT/ICONS/linkedin_tj2l0l.webp" alt="Linkedin icon"/>
    </a>
  </li>
  <li>
    <a href="https://github.com/kareenadg">
    <img src="https://res.cloudinary.com/dlvbfzkt9/image/upload/v1675536255/APP_HUB_PROJECT/ICONS/github_p8skdm.png" alt="Github icon"/>
    </a>
  </li>
</ul>
</div>
<div class="creator"><h2>Powered by Kareen A.</h2></div>
`;

export const printTemplate = () => {
    document.querySelector("footer").innerHTML = template();
};