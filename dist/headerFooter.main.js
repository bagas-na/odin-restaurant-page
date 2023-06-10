"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["headerFooter"],{

/***/ "./src/header-footer.js":
/*!******************************!*\
  !*** ./src/header-footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   navbar: () => (/* binding */ navbar)
/* harmony export */ });
const header = () => {
  const header = document.createElement("header");

  const restaurantName = document.createElement("h1");
  restaurantName.id = "restaurant-name";
  restaurantName.innerText = "Stekys Estancia";

  const motto = document.createElement("h2");
  motto.id = "motto";
  motto.innerText = "Serving Steaks e.s.t. 1999";

  header.append(restaurantName, motto);
  return header;
};

const navbar = () => {
  const navbar = document.createElement("nav");
  const list = document.createElement("ul");

  const home = document.createElement("li");
  home.classList.add("nav-btn");
  home.id = "nav-home";
  home.textContent = "Home";

  const menu = document.createElement("li");
  menu.classList.add("nav-btn");
  menu.id = "nav-menu";
  menu.textContent = "Menu";

  const contact = document.createElement("li");
  contact.classList.add("nav-btn");
  contact.textContent = "Contact";

  list.append(home, menu, contact);
  navbar.appendChild(list);

  return navbar;
};

const footer = () => {
  const footer = document.createElement("footer");

  const bgCredits = document.createElement("p");
  const authorLink = document.createElement("a");
  authorLink.setAttribute(
    "href",
    "https://unsplash.com/@emersonvieira?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  );
  authorLink.textContent = "Emerson Vieira";
  const imageLink = document.createElement("a");
  imageLink.setAttribute(
    "href",
    "https://unsplash.com/photos/Mq1LDuswX2o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  );
  imageLink.textContent = "Unsplash";

  bgCredits.append("Background image by ", authorLink, " on ", imageLink);
  footer.appendChild(bgCredits);

  return footer;
};




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header-footer.js"));
/******/ }
]);
//# sourceMappingURL=headerFooter.main.js.map