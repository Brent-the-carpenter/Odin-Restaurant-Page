import { content } from "./index.js";

function menuItems(item, describe, price) {
  let contentContainer = document.querySelector(".content");
  let menuCard = document.createElement("div");
  menuCard.classList.add("menuItem");
  let name = document.createElement("h4");
  let description = document.createElement("p");
  const Price = document.createElement("div");
  name.textContent = item;
  description.textContent = describe;
  Price.textContent = price;
  contentContainer.appendChild(menuCard);
  menuCard.appendChild(name);
  menuCard.appendChild(description);
  menuCard.appendChild(Price);
}
function addMenuItems() {
  let capichino = menuItems(
    "Capichino",
    "A cappuccino is an espresso drink with steamed milk, milk foam and espresso.",
    `$5.50`
  );

  let machioto = menuItems(
    "Machioto",
    "two shots of esspreso caped with foam",
    `$4.50`
  );

  let coldBrew = menuItems(
    "Cold Brew",
    "Ice coffee that is made using cold water - caffine content higher than ice coffee!",
    `$5.00`
  );

  let hotCoffe = menuItems(
    "Regular plain jaine",
    "Just regular coffee",
    `$3.50`
  );
}
export { addMenuItems };
