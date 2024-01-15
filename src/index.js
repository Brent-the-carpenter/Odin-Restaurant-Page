import "./style.css";
import { Page } from "./homePage.js";
import { home } from "./homePage.js";

const content = document.querySelector(".content");
const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const contactButton = document.querySelector(".conctactButton");
export { content };

let homePage = new Page();

homePage.renderBody(home);
homePage.renderHead();
homePage.renderFooter();

export { home };
