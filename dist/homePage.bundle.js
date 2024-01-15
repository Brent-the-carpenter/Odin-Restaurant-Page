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
  about:
    " At Valhalla Caffe we take pride in serving you the best coffee possible.  \n\
   Our coffee beans are Roasted in house by our Roast-Master Thor using state of the art lighting technology to bring the fullest flavors out!  ",
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
  };
  renderBody(home) {
    let page = home;
    let contentContainer = document.querySelector(".content");
    let homeButton = document.querySelector(".homeButton");
    homeButton.classList.add(".button:active");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsU0FBUztBQUNuRCxxQ0FBcUMsZUFBZTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiSXQncyBBTElWRVwiKTtcbi8vIGltcG9ydCB7IGNvbnRlbnQgfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuY29uc3QgaG9tZSA9IHtcbiAgYWJvdXQ6XG4gICAgXCIgQXQgVmFsaGFsbGEgQ2FmZmUgd2UgdGFrZSBwcmlkZSBpbiBzZXJ2aW5nIHlvdSB0aGUgYmVzdCBjb2ZmZWUgcG9zc2libGUuICBcXG5cXFxuICAgT3VyIGNvZmZlZSBiZWFucyBhcmUgUm9hc3RlZCBpbiBob3VzZSBieSBvdXIgUm9hc3QtTWFzdGVyIFRob3IgdXNpbmcgc3RhdGUgb2YgdGhlIGFydCBsaWdodGluZyB0ZWNobm9sb2d5IHRvIGJyaW5nIHRoZSBmdWxsZXN0IGZsYXZvcnMgb3V0ISAgXCIsXG59O1xuY2xhc3MgUGFnZSB7XG4gIGNvbnN0dWN0b3Iob2JqZWN0KSB7XG4gICAgdGhpcy5vYmplY3QyID09PSBvYmplY3Q7XG4gIH1cblxuICByZW5kZXJIZWFkID0gKCkgPT4ge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJWYWxoYWxsYSBDYWZmZVwiO1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJuYXZcIik7XG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaG9tZUJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudUJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY29udGFjdEJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzXCI7XG4gICAgY29uc29sZS5sb2coXCJpbSBiZWluZyBjYWxsZWRcIik7XG4gICAgYm9keS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgfTtcbiAgcmVuZGVyQm9keShob21lKSB7XG4gICAgbGV0IHBhZ2UgPSBob21lO1xuICAgIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGxldCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lQnV0dG9uXCIpO1xuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcIi5idXR0b246YWN0aXZlXCIpO1xuICAgIGZ1bmN0aW9uIGFkZEVsZW1lbnRzKHBhZ2UpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gcGFnZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciBoZXJlXCIpO1xuICAgICAgICBsZXQgcGFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtwcm9wZXJ0eX1gKTtcbiAgICAgICAgcGFnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHtwYWdlW3Byb3BlcnR5XX1gO1xuICAgICAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHBhZ2U7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZEVsZW1lbnRzKHBhZ2UpO1xuICB9XG5cbiAgcmVuZGVyRm9vdGVyKCkge1xuICAgIGNvbnN0IEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgY29uc3QgU2lnbnV0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBTaWdudXR1cmUudGV4dENvbnRlbnQgPSBcIsKpQnJlbnQtdGhlLWNhcnBlbnRlclwiO1xuICAgIEZvb3Rlci5hcHBlbmRDaGlsZChTaWdudXR1cmUpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKEZvb3Rlcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgUGFnZSwgaG9tZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9