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

export default menu;