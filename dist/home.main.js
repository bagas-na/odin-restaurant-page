"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const frontText = () => {
  const frontText = document.createElement("div");
  frontText.classList.add("front-text");

  const header = document.createElement("h1");
  header.innerText = "Exquisite &<br />Hedonistic Food";

  const description1 = document.createElement("p");
  description1.classList.add("description");
  description1.textContent =
    "Indulge in our signature steaks, meticulously prepared to perfection";

  const description2 = document.createElement("p");
  description2.classList.add("description");
  description2.textContent =
    "From tender filet mignon to juicy ribeye and robust porterhouse, each bite is pure pleasure.";

  frontText.append(header, description1, description2);

  return frontText;
};

const timetable = () => {
  const timetable = document.createElement("div");
  timetable.classList.add("timetable");

  const header = document.createElement("h2");
  header.textContent = "Opening Hours";

  const table = document.createElement("table");
  table.classList.add = "open-hours";
  table.innerHTML = `<colgroup><col style="align: center" /><col style="align: center" /></colgroup>
  <thead><tr><th>Day</th><th>Opening Time</th><th>Closing Time</th></tr></thead>
  <tbody>
    <tr><td>Monday</td><td>10:00</td><td>21:30</td></tr>
    <tr><td>Tuesday</td><td>10:00</td><td>21:30</td></tr>
    <tr><td>Wednesday</td><td colspan="2">Closed</td></tr>
    <tr><td>Thursday</td><td>10:00</td><td>21:30</td></tr>
    <tr><td>Friday</td><td>10:00</td><td>21:30</td></tr>
    <tr><td>Saturday</td><td>10:00</td><td>24:00</td></tr>
    <tr><td>Sunday</td><td>14:00</td><td>22:00</td></tr>
  </tbody>`;

  timetable.append(header, table);
  return timetable;
};

const home = () => {
  const home = document.createElement("div");
  home.classList.add("home");
  home.append(frontText(), timetable());
  return home;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=home.main.js.map