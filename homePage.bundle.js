"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["homePage"],{

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderHome: () => (/* binding */ renderHome)
/* harmony export */ });
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




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homePage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLFlBQVksVUFBVTs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkl0J3MgQUxJVkVcIik7XG4vLyBpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxubGV0IHBhZ2U7XG5cbihmdW5jdGlvbiByZW5kZXJIZWFkKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJWYWxoYWxsYSBDYWZmZVwiO1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvbWVCdXR0b25cIik7XG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnVCdXR0b25cIik7XG4gIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImNvbnRhY3RCdXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcbiAgY29uc29sZS5sb2coXCJpbSBiZWluZyBjYWxsZWRcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgbmF2LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbn0pKCk7XG5mdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICBhYm91dC50ZXh0Q29udGVudCA9XG4gICAgXCJBdCBWYWxoYWxsYSBDYWZmZSB3ZSB0YWtlIHByaWRlIGluIHNlcnZpbmcgeW91IHRoZSBiZXN0IGNvZmZlZSBwb3NzaWJsZS4gIFxcblxcXG4gICAgT3VyIGNvZmZlZSBiZWFucyBhcmUgUm9hc3RlZCBpbiBob3VzZSBieSBvdXIgUm9hc3QtTWFzdGVyIFRob3IgdXNpbmcgc3RhdGUgb2YgdGhlIGFydCBsaWdodGluZyB0ZWNobm9sb2d5IHRvIGJyaW5nIHRoZSBmdWxsZXN0IGZsYXZvcnMgb3V0ISBcIjtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG59XG5cbihmdW5jdGlvbiByZW5kZXJGb290ZXIoKSB7XG4gIGNvbnN0IEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gIGNvbnN0IFNpZ251dHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIFNpZ251dHVyZS50ZXh0Q29udGVudCA9IFwiwqlCcmVudC10aGUtY2FycGVudGVyXCI7XG4gIEZvb3Rlci5hcHBlbmRDaGlsZChTaWdudXR1cmUpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKTtcbn0pKCk7XG5cbmV4cG9ydCB7IHJlbmRlckhvbWUgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==