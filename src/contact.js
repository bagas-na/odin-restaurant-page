const contactInfo = () => {
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const locationHeader = document.createElement("h3");
  locationHeader.textContent = "Location:";
  const locationText = document.createElement("p");
  locationText.textContent = "123 Main Street, City, State";

  const phoneHeader = document.createElement("h3");
  phoneHeader.textContent = "Telephone:";
  const phoneText = document.createElement("p");
  phoneText.textContent = "123-456-7890";

  const emailHeader = document.createElement("h3");
  emailHeader.textContent = "Email:";
  const emailText = document.createElement("p");
  emailText.textContent = "info@example.com";

  contactInfo.append(
    locationHeader,
    locationText,
    phoneHeader,
    phoneText,
    emailHeader,
    emailText
  );

  return contactInfo;
};

const embedMap = () => {
  const embedMap = document.createElement("div");
  embedMap.classList.add("embed-map");

  const map = document.createElement("iframe");
  map.setAttribute("width", "600");
  map.setAttribute("height", "400");
  map.setAttribute("style", "border:0");
  map.setAttribute("loading", "lazy");
  map.setAttribute("allowfullscreen", "");
  map.setAttribute("referrerrpolicy", "no-referrer-when-downgrade");
  map.setAttribute("src", "https://www.google.com/maps/embed/v1/place?key=AIzaSyAGtHqF8CGT6Gd6mK8vfaoejPbmYfX2_8s&q=Estancia+Jakarta");

  embedMap.appendChild(map);

  return embedMap;
};

const contactCard = () => {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');

    contactCard.append(contactInfo(), embedMap());

    return contactCard;
}

const contact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const header1 = document.createElement('h1');
    header1.textContent = "Contact Us";

    const header2 = document.createElement('h2');
    header2.textContent = "Get in Touch";

    contact.append(header1, header2, contactCard());

    return contact;
}

export default contact;