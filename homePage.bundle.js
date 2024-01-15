"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["homePage"],{

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page),
/* harmony export */   home: () => (/* binding */ home)
/* harmony export */ });
console.log("It's ALIVE");
// import { content } from "./index.js";
const home = {
  about: "We here at Peine pizzaria make ",
};
class Page {
  constuctor(object) {
    this.object2 === object;
  }

  renderHead = () => {
    const body = document.querySelector("body");
    const header = document.createElement("header");
    header.classList.add("header");
    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.textContent = "Peine pizzaria";
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
  };
  renderBody(home) {
    let page = home;
    let contentContainer = document.querySelector(".content");
    function addElements(page) {
      for (const property in page) {
        console.log("render here");
        let pageElement = document.createElement("div");
        pageElement.setAttribute("id", `${property}`);
        pageElement.textContent = `${page[property]}`;
        contentContainer.appendChild(pageElement);
        return page;
      }
    }
    addElements(page);
  }

  renderFooter() {
    const Footer = document.createElement("footer");
    const Signuture = document.createElement("div");
    Signuture.textContent = "©Brent-the-carpenter";
    Footer.appendChild(Signuture);
    const body = document.querySelector("body");
    body.appendChild(Footer);
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/homePage.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQscUNBQXFDLGVBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcIkl0J3MgQUxJVkVcIik7XG4vLyBpbXBvcnQgeyBjb250ZW50IH0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmNvbnN0IGhvbWUgPSB7XG4gIGFib3V0OiBcIldlIGhlcmUgYXQgUGVpbmUgcGl6emFyaWEgbWFrZSBcIixcbn07XG5jbGFzcyBQYWdlIHtcbiAgY29uc3R1Y3RvcihvYmplY3QpIHtcbiAgICB0aGlzLm9iamVjdDIgPT09IG9iamVjdDtcbiAgfVxuXG4gIHJlbmRlckhlYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJoZWFkaW5nXCIpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlBlaW5lIHBpenphcmlhXCI7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJob21lQnV0dG9uXCIpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51QnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0QnV0dG9uXCIpO1xuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXNcIjtcbiAgICBjb25zb2xlLmxvZyhcImltIGJlaW5nIGNhbGxlZFwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXYpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChob21lQnV0dG9uKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pO1xuICB9O1xuICByZW5kZXJCb2R5KGhvbWUpIHtcbiAgICBsZXQgcGFnZSA9IGhvbWU7XG4gICAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgZnVuY3Rpb24gYWRkRWxlbWVudHMocGFnZSkge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBwYWdlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVuZGVyIGhlcmVcIik7XG4gICAgICAgIGxldCBwYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke3Byb3BlcnR5fWApO1xuICAgICAgICBwYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGAke3BhZ2VbcHJvcGVydHldfWA7XG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZUVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgIH1cbiAgICB9XG4gICAgYWRkRWxlbWVudHMocGFnZSk7XG4gIH1cblxuICByZW5kZXJGb290ZXIoKSB7XG4gICAgY29uc3QgRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCBTaWdudXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFNpZ251dHVyZS50ZXh0Q29udGVudCA9IFwiwqlCcmVudC10aGUtY2FycGVudGVyXCI7XG4gICAgRm9vdGVyLmFwcGVuZENoaWxkKFNpZ251dHVyZSk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKTtcbiAgfVxufVxuXG5leHBvcnQgeyBQYWdlLCBob21lIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=