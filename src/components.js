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
  contact.id = "nav-contact";
  contact.textContent = "Contact";

  list.append(home, menu, contact);
  navbar.appendChild(list);

  return navbar;
};

const main = () => {
  const main = document.createElement("main");

  main.appendChild(navbar());
  return main;
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

export { footer, header, main, navbar };

