console.log("It's ALIVE");
// import { content } from "./index.js";

let page;

(function renderHead() {
  const body = document.querySelector("body");
  const header = document.createElement("header");
  header.classList.add("header");
  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "Valhalla Caffe";
  const nav = document.createElement("nav");
  nav.classList.add("nav");
  const homeButton = document.createElement("button");
  homeButton.classList.add("homeButton");
  homeButton.textContent = "Home";
  const menuButton = document.createElement("button");
  menuButton.classList.add("menuButton");
  menuButton.textContent = "Menu";
  const contactButton = document.createElement("button");
  contactButton.classList.add("contactButton");
  contactButton.textContent = "Contact us";
  console.log("im being called");
  body.appendChild(header);
  header.appendChild(heading);
  header.appendChild(nav);
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
})();
function renderHome() {
  let contentContainer = document.querySelector(".content");
  let about = document.createElement("div");
  about.classList.add("about");
  about.textContent =
    "At Valhalla Caffe we take pride in serving you the best coffee possible.  \n\
    Our coffee beans are Roasted in house by our Roast-Master Thor using state of the art lighting technology to bring the fullest flavors out! ";
  contentContainer.appendChild(about);
}

(function renderFooter() {
  const Footer = document.createElement("footer");
  const Signuture = document.createElement("div");
  Signuture.textContent = "©Brent-the-carpenter";
  Footer.appendChild(Signuture);
  const body = document.querySelector("body");
  body.appendChild(Footer);
})();

export { renderHome };
