"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Poiret+One&family=Red+Hat+Display:wght@300;400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  background: no-repeat
    url("https://images.unsplash.com/photo-1558030154-d3605e91d892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=2560&q=60");
  background-attachment: fixed;
  background-size: cover;
  background-color: rgb(0, 0, 0);
}

#content {
  /* position: relative; */
  margin: 0 auto;
  min-height: 100vh;
}

h1,
h2 {
  font-family: "Dancing Script", cursive;
  margin: 1rem 0;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  margin: 0 0 -10px;
}

h2 {
  font-size: 2rem;
  font-weight: 400;
}

h3 {
  font-family: "Poiret One", cursive;
}

header {
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 0;
  text-align: center;
}

header h1,
header h2 {
  margin-bottom: -5px;
}

nav {
  position: sticky;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px 0 10px;
  text-align: center;
}

nav > ul {
  display: flex;
  gap: 50px;
  justify-content: center;
}

ul,
li {
  margin: 0;
  padding: 0;
}

.nav-btn {
  padding-bottom: 5px;
  border-bottom: 3px solid transparent;
  list-style: none;
  font-family: "Poiret One", cursive;
  font-size: 1.2rem;
  transition: transform 0.05s;
}

.nav-btn:hover {
  cursor: pointer;
  border-bottom: 1px solid white;
  transform: translate(0, 2px);
}

.nav-btn.active {
  cursor: pointer;
  /* border-bottom: 3px solid white; */
  font-weight: bolder;
  border-bottom: 3px solid white;
}

footer {
  position: sticky;
  top: 100vh;
  height: 40px;
  width: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

footer p,
footer a {
  text-align: center;
}

main {
  position: relative;
}

p.description {
  font-size: 1.5rem;
}

table {
  width: clamp(400px, 50%, 500px);
  border-collapse: collapse;
  font-family: "Red Hat Display", sans-serif;
  font-size: 16px;
  text-indent: 0;
}

table td {
  text-align: center;
}

table td:first-child {
  text-align: left;
}

th {
  font-weight: bold;
}

th,
td {
  padding: 10px;
  /* text-align: center; */
  border-bottom: 1px solid #ddd;
}

.home {
  max-width: 2560px;
  margin: 0 auto;
  padding: 2rem max(3rem, 10%);
  top: 2rem;
  color: white;

  /* display: none; */
}

.home h1,
.home h2 {
  margin: 15px 0;
}

.menu {
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  max-width: 950px;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem 0;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* display: none; */
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 350px));
  grid-template-rows: 4rem 1fr 1fr 4rem 1fr 1fr;
  column-gap: 25px;
  row-gap: 15px;
}

.menu h1 {
  font-size: 3rem;
}

.menu h2 {
  text-align: center;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

#steak {
  grid-column: span 2;
  text-align: center;
}

#poultry,
#vegetarian {
  grid-row-start: 4;
}
#vegetarian + .menu-item {
  grid-column-start: 2;
  grid-row-start: 5;
}

.menu img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  object-position: center;
}

.menu h3,
.menu p {
  margin: 0;
  padding: 0;
}

.contact {
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  max-width: 950px;
  width: 100%;
  margin: 2rem auto;
  padding: 2rem 0;
  color: white;
  text-align: center;
}

.contact-card {
  text-align: left;
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  

}

p,
a {
  box-sizing: border-box;
  margin: 0;
  color: white;
  font-family: "Red Hat Display", sans-serif;
  font-size: 16px;
  padding: 10px 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT;qKACmK;EACnK,4BAA4B;EAC5B,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,wBAAwB;EACxB,cAAc;EACd,iBAAiB;AACnB;;AAEA;;EAEE,sCAAsC;EACtC,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,QAAQ;EACR,oCAAoC;EACpC,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;;AAEA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,oCAAoC;EACpC,gBAAgB;EAChB,kCAAkC;EAClC,iBAAiB;EACjB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,oCAAoC;EACpC,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,SAAS;EACT,oCAAoC;AACtC;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,+BAA+B;EAC/B,yBAAyB;EACzB,0CAA0C;EAC1C,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,4BAA4B;EAC5B,SAAS;EACT,YAAY;;EAEZ,mBAAmB;AACrB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,oCAAoC;EACpC,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sDAAsD;EACtD,6CAA6C;EAC7C,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;;EAEE,iBAAiB;AACnB;AACA;EACE,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,sBAAsB;EACtB,gBAAgB;EAChB,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,6BAA6B;;;AAG/B;;AAEA;;EAEE,sBAAsB;EACtB,SAAS;EACT,YAAY;EACZ,0CAA0C;EAC1C,eAAe;EACf,eAAe;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Poiret+One&family=Red+Hat+Display:wght@300;400&display=swap');\r\n\r\nbody {\r\n  margin: 0;\r\n  background: no-repeat\r\n    url(\"https://images.unsplash.com/photo-1558030154-d3605e91d892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&w=2560&q=60\");\r\n  background-attachment: fixed;\r\n  background-size: cover;\r\n  background-color: rgb(0, 0, 0);\r\n}\r\n\r\n#content {\r\n  /* position: relative; */\r\n  margin: 0 auto;\r\n  min-height: 100vh;\r\n}\r\n\r\nh1,\r\nh2 {\r\n  font-family: \"Dancing Script\", cursive;\r\n  margin: 1rem 0;\r\n}\r\n\r\nh1 {\r\n  font-size: 4rem;\r\n  font-weight: 700;\r\n  margin: 0 0 -10px;\r\n}\r\n\r\nh2 {\r\n  font-size: 2rem;\r\n  font-weight: 400;\r\n}\r\n\r\nh3 {\r\n  font-family: \"Poiret One\", cursive;\r\n}\r\n\r\nheader {\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: white;\r\n  padding: 5px 0;\r\n  text-align: center;\r\n}\r\n\r\nheader h1,\r\nheader h2 {\r\n  margin-bottom: -5px;\r\n}\r\n\r\nnav {\r\n  position: sticky;\r\n  top: 0px;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n  color: white;\r\n  padding: 10px 0 10px;\r\n  text-align: center;\r\n}\r\n\r\nnav > ul {\r\n  display: flex;\r\n  gap: 50px;\r\n  justify-content: center;\r\n}\r\n\r\nul,\r\nli {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.nav-btn {\r\n  padding-bottom: 5px;\r\n  border-bottom: 3px solid transparent;\r\n  list-style: none;\r\n  font-family: \"Poiret One\", cursive;\r\n  font-size: 1.2rem;\r\n  transition: transform 0.05s;\r\n}\r\n\r\n.nav-btn:hover {\r\n  cursor: pointer;\r\n  border-bottom: 1px solid white;\r\n  transform: translate(0, 2px);\r\n}\r\n\r\n.nav-btn.active {\r\n  cursor: pointer;\r\n  /* border-bottom: 3px solid white; */\r\n  font-weight: bolder;\r\n  border-bottom: 3px solid white;\r\n}\r\n\r\nfooter {\r\n  position: sticky;\r\n  top: 100vh;\r\n  height: 40px;\r\n  width: 100%;\r\n  margin: 0;\r\n  background-color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\nfooter p,\r\nfooter a {\r\n  text-align: center;\r\n}\r\n\r\nmain {\r\n  position: relative;\r\n}\r\n\r\np.description {\r\n  font-size: 1.5rem;\r\n}\r\n\r\ntable {\r\n  width: clamp(400px, 50%, 500px);\r\n  border-collapse: collapse;\r\n  font-family: \"Red Hat Display\", sans-serif;\r\n  font-size: 16px;\r\n  text-indent: 0;\r\n}\r\n\r\ntable td {\r\n  text-align: center;\r\n}\r\n\r\ntable td:first-child {\r\n  text-align: left;\r\n}\r\n\r\nth {\r\n  font-weight: bold;\r\n}\r\n\r\nth,\r\ntd {\r\n  padding: 10px;\r\n  /* text-align: center; */\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.home {\r\n  max-width: 2560px;\r\n  margin: 0 auto;\r\n  padding: 2rem max(3rem, 10%);\r\n  top: 2rem;\r\n  color: white;\r\n\r\n  /* display: none; */\r\n}\r\n\r\n.home h1,\r\n.home h2 {\r\n  margin: 15px 0;\r\n}\r\n\r\n.menu {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  box-sizing: border-box;\r\n  max-width: 950px;\r\n  width: 100%;\r\n  margin: 2rem auto;\r\n  padding: 2rem 0;\r\n  color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  /* display: none; */\r\n}\r\n\r\n.menu-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(250px, 350px));\r\n  grid-template-rows: 4rem 1fr 1fr 4rem 1fr 1fr;\r\n  column-gap: 25px;\r\n  row-gap: 15px;\r\n}\r\n\r\n.menu h1 {\r\n  font-size: 3rem;\r\n}\r\n\r\n.menu h2 {\r\n  text-align: center;\r\n}\r\n\r\n.menu-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n#steak {\r\n  grid-column: span 2;\r\n  text-align: center;\r\n}\r\n\r\n#poultry,\r\n#vegetarian {\r\n  grid-row-start: 4;\r\n}\r\n#vegetarian + .menu-item {\r\n  grid-column-start: 2;\r\n  grid-row-start: 5;\r\n}\r\n\r\n.menu img {\r\n  width: 250px;\r\n  height: 250px;\r\n  object-fit: cover;\r\n  object-position: center;\r\n}\r\n\r\n.menu h3,\r\n.menu p {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.contact {\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  box-sizing: border-box;\r\n  max-width: 950px;\r\n  width: 100%;\r\n  margin: 2rem auto;\r\n  padding: 2rem 0;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.contact-card {\r\n  text-align: left;\r\n  display: flex;\r\n  align-items: start;\r\n  justify-content: space-evenly;\r\n  \r\n\r\n}\r\n\r\np,\r\na {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  color: white;\r\n  font-family: \"Red Hat Display\", sans-serif;\r\n  font-size: 16px;\r\n  padding: 10px 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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




/***/ }),

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-footer.js */ "./src/header-footer.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");





const main = () => {
  const main = document.createElement("main");

  main.appendChild((0,_header_footer_js__WEBPACK_IMPORTED_MODULE_0__.navbar)());
  return main;
};

const addButtonFunctions = () => {
  const buttons = document.getElementsByClassName('nav-btn');
  let currentPage = "";
  
  [...buttons].forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn.textContent);
      currentPage = btn.textContent;
      renderPage(currentPage);
    })
  })
}

const initialRender = () => {
  const body = document.getElementsByTagName("body")[0];

  const content = document.createElement("div");
  content.id = "content";
  content.appendChild((0,_header_footer_js__WEBPACK_IMPORTED_MODULE_0__.header)());
  content.appendChild(main());
  content.appendChild((0,_header_footer_js__WEBPACK_IMPORTED_MODULE_0__.footer)());

  body.appendChild(content);

  addButtonFunctions();
};

const renderPage = (page = "Home") => {
  const main = document.getElementsByTagName('main')[0];
  
  while (main.hasChildNodes()) {
    main.removeChild(main.lastChild);
  }

  main.appendChild((0,_header_footer_js__WEBPACK_IMPORTED_MODULE_0__.navbar)());

  let button;

  switch(page) {
    case 'Home': 
      main.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
      button = document.getElementById('nav-home');
      button.classList.add('active');
      break;
    case 'Menu':
      main.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
      button = document.getElementById('nav-menu');
      button.classList.add('active');
      break;
  }
  addButtonFunctions();
}


initialRender();
renderPage();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MenuItem = (name, category, imageLink, imageAlt, description) => {
  return { name, category, imageLink, imageAlt, description };
};

const menuList = [
  MenuItem(
    "Filet Mignon",
    "Steak Selection",
    "https://images.unsplash.com/photo-1559847844-d9d2bc807d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    "Filet Mignon",
    "Tender and juicy, a melt-in-your-mouth steak experience"
  ),
  MenuItem(
    "Ribeye",
    "Steak Selection",
    "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    "Ribeye",
    "Indulge in the rich marbling and bold, beefy flavor"
  ),
  MenuItem(
    "New York Strip",
    "Steak Selection",
    "https://crowdcow-images.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fjigso8mmhmq2%2F5BczCDlt775vEkajw0Ljft%2F4e8fd08580f3cc1b1a106c78a3c0fdcf%2F20191218_CrowdCow0230__1_.jpg?ixlib=rails-2.1.4&fit=crop&auto=compress&w=1900&cs=srgb&s=bff9afdb80ee38612ab5bc96d40b2f99",
    "New York Strip",
    "Savor the perfect balance of tenderness and a hearty bite."
  ),
  MenuItem(
    "Porterhouse",
    "Steak Selection",
    "https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/1:1/w_2560%2Cc_limit/perfect-porterhouse-steak.jpg",
    "Porterhouse",
    "Experience the best of both worlds with a combination of tender filet mignon and flavorful strip steak."
  ),
  MenuItem(
    "Roasted Chicken",
    "Steak Selection",
    "https://assets.bonappetit.com/photos/62f5674caf9bae430097be0f/1:1/w_500%2Cc_limit/0810-no-fail-roast-chicken-v2.jpg",
    "Roasted Chicken",
    "Enjoy tender and succulent roasted chicken, infused with aromatic herbs and spices."
  ),
  MenuItem(
    "Cripsy Skin Cornish Hen",
    "Steak Selection",
    "https://www.spendwithpennies.com/wp-content/uploads/2020/07/Roasted-Cornish-Hen-SpendWithPennies-6.jpg",
    "Cripsy Skin Cornish Hen",
    "Delight in perfectly cooked Cornish hen with irresistibly crispy skin."
  ),
  MenuItem(
    "Grilled Vegetable Skewers",
    "Steak Selection",
    "https://www.aspicyperspective.com/wp-content/uploads/2016/06/grilled-fajita-vegetable-skewers-15.jpg",
    "Grilled Vegetable Skewers",
    "Satisfy your palate with a medley of grilled vegetables served on skewers."
  ),
  MenuItem(
    "Portobello Mushroom Steak",
    "Steak Selection",
    "https://veganhuggs.com/wp-content/uploads/2019/07/grilled-portobello-mushroom-steaks-4.jpg",
    "Portobello Mushroom Steak",
    "Indulge in the meaty and robust flavors of a Portobello mushroom steak."
  ),
];

const menuItemComponent = (item) => {
  const menuItemComponent = document.createElement("div");
  menuItemComponent.classList.add("menu-item");

  const image = document.createElement("img");
  image.setAttribute("src", item.imageLink);
  image.setAttribute("alt", item.imageAlt);

  const name = document.createElement("h3");
  name.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  menuItemComponent.append(image, name, description);

  return menuItemComponent;
};

const menuGrid = () => {
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  const steakCategory = document.createElement("h2");
  steakCategory.id = "steak";
  steakCategory.textContent = "Steak Selection";

  const item1 = menuItemComponent(menuList[0]);
  const item2 = menuItemComponent(menuList[1]);
  const item3 = menuItemComponent(menuList[2]);
  const item4 = menuItemComponent(menuList[3]);

  const poultryCategory = document.createElement("h2");
  poultryCategory.id = "poultry";
  poultryCategory.textContent = "Poultry Delights";

  const item5 = menuItemComponent(menuList[4]);
  const item6 = menuItemComponent(menuList[5]);

  const vegetarianCategory = document.createElement("h2");
  vegetarianCategory.id = "vegetarian";
  vegetarianCategory.textContent = "Vegetarian Selection";

  const item7 = menuItemComponent(menuList[6]);
  const item8 = menuItemComponent(menuList[7]);

  menuGrid.append(
    steakCategory,
    item1,
    item2,
    item3,
    item4,
    poultryCategory,
    item5,
    item6,
    vegetarianCategory,
    item7,
    item8
  );

  return menuGrid;
};

const menu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const header = document.createElement('h1');
    header.textContent= "Menu";

    menu.append(header, menuGrid());

    return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=index.main.js.map