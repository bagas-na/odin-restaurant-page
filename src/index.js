import { footer, header, navbar } from "./header-footer.js";
import home from "./home.js";
import "./styles.css";

let currentPage = home;

const main = () => {
  const main = document.createElement("main");

  main.appendChild(navbar());

  return main;
};

const addButtonFunctions = () => {
  const buttons = document.getElementsByClassName('nav-btn');

  [...buttons].forEach((btn) => {
    btn.addEventListener('click', () => {
      console.log(btn.textContent);
    })
  })
}

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

const renderPage = () => {

}


initialRender();
