function contact() {
  let content = document.querySelector(".content");
  let mapContainer = document.createElement("div");
  mapContainer.setAttribute("id", "mapContainer");
  let map = document.createElement("div");
  map.setAttribute("id", "map");
  let phoneNumber = document.createElement("div");
  phoneNumber.textContent = " Phone# :1800-831-Brewed";
  let address = document.createElement("div");
  address.textContent = ` Address : 6780 Raider hill ,
    Iceland ,
    Scandinavia `;
  let email = document.createElement("div");
  email.textContent = "email: Odin@asguard.com";
  let infoContainer = document.createElement("div");
  infoContainer.setAttribute("id", "info");

  infoContainer.appendChild(phoneNumber);
  infoContainer.appendChild(email);
  infoContainer.appendChild(address);
  mapContainer.appendChild(map);
  mapContainer.appendChild(infoContainer);
  content.appendChild(mapContainer);
}
export { contact };
