import "./style.css";
import { Page } from "./homePage.js";
import { home } from "./homePage.js";
const content = document.querySelector(".content");
export { content };

let homePage = new Page();

homePage.renderBody(home);
homePage.renderHead();
homePage.renderFooter();

export { home };
