import { footer, header, main, navbar } from "./components.js";
import contact from "./contact.js";
import home from "./home.js";
import menu from "./menu.js";
import "./styles.css";

const addButtonFunctions = () => {
  const buttons = document.getElementsByClassName("nav-btn");
  let currentPage = "";

  [...buttons].forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(btn.textContent);
      currentPage = btn.textContent;
      renderPage(currentPage);
    });
  });
};

const initialRender = () => {
  const body = document.getElementsByTagName("body")[0];

  const content = document.createElement("div");
  content.id = "content";
  content.appendChild(header());
  content.appendChild(main());
  content.appendChild(footer());

  body.appendChild(content);

  addButtonFunctions();
};

const renderPage = (page = "Home") => {
  const main = document.getElementsByTagName("main")[0];

  while (main.hasChildNodes()) {
    main.removeChild(main.lastChild);
  }

  main.appendChild(navbar());

  let button;

  switch (page) {
    case "Home":
      main.appendChild(home());
      button = document.getElementById("nav-home");
      button.classList.add("active");
      break;
    case "Menu":
      main.appendChild(menu());
      button = document.getElementById("nav-menu");
      button.classList.add("active");
      break;
    case "Contact":
      main.appendChild(contact());
      button = document.getElementById("nav-menu");
      button.classList.add("active");
      break;
  }
  addButtonFunctions();
};

initialRender();
renderPage();
