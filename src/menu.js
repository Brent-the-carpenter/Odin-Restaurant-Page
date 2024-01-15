import { content } from "./index.js";

function menuItems(item, describe) {
  let menuCard = document.createElement("div");
  menuCard.classList.add(".menuItem");
  let name = document.createElement("h4");
  let description = document.createElement("p");
  name.textContent = item;
  description = describe;
  content.appendChild(menuCard);
  menuCard.appendChild(name);
  menuCard.appendChild(description);
}

let capichino = menuItems(
  "capichino",
  "A cappuccino is an espresso drink with steamed milk, milk foam and espresso."
);

let machioto = menuItems("machioto", "two shots of esspreso caped with foam");

let coldBrew = menuItems(
  "Cold Brew",
  "Ice coffee that is made using cold water - caffine content higher than ice coffee!"
);

let hotCoffe = menuItems("Regular plain jaine", "Just regular coffee");

hotCoffe();
