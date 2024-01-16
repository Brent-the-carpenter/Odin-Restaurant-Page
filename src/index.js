import "./style.css";
import { renderHome } from "./homePage.js";
import { addMenuItems } from "./menu.js";
import { contact } from "./contact.js";
const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".contactButton");
let page = "home";

function renderContent() {
  refresh(page);
  if (page === "home") {
    renderHome();
  } else if (page === "menu") {
    addMenuItems();
  } else if (page === "contact") {
    contact();
  }
}
renderContent();

function refresh(page) {
  let contentContainer = document.querySelector(".content");
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.lastChild);
  }
  if (page !== "home" && page !== "contact") {
    menuButton.setAttribute("id", "active");
    homeButton.removeAttribute("id", "active");
    contactButton.removeAttribute("id", "active");
  } else if (page !== "menu" && page !== "contact") {
    menuButton.removeAttribute("id", "active");
    homeButton.setAttribute("id", "active");
    contactButton.removeAttribute("id", "active");
  } else if (page !== "menu" && page !== "home") {
    menuButton.removeAttribute("id", "active");
    homeButton.removeAttribute("id", "active");
    contactButton.setAttribute("id", "active");
  }
}
homeButton.addEventListener("click", () => {
  page = "home";
  refresh(page);
  renderHome();
  return page;
});

menuButton.addEventListener("click", () => {
  page = "menu";
  refresh(page);
  addMenuItems();
  return page;
});

contactButton.addEventListener("click", () => {
  page = "contact";
  refresh(page);
  contact(page);
  return page;
});
