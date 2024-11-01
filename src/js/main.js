import { getParkData, getInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";


function setParkIntro(data) {
  const introEl = document.querySelector(".intro");
  introEl.innerHTML = `<h1>${data.fullName}</h1>
  <p>${data.description}</p>`;
}

function setParkInfoLinks(data) {
  const infoEl = document.querySelector(".info");
  const html = data.map(mediaCardTemplate);
  
  infoEl.insertAdjacentHTML("afterbegin", html.join(""));
}

function enableNavigation() {
  const menuButton = document.querySelector("#global-nav-toggle");
  
  // when the main menu button is clicked:
  menuButton.addEventListener("click", (ev) => {
    // toggle the show class on the global-nav
    const globalNav = document.querySelector(".global-nav");
    globalNav.classList.toggle("show");

    // check if we just opened or closed the menu
    if (globalNav.classList.contains("show")) {
      // if we opened it, set aria-expanded to true and change text to "Close"
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.innerHTML = `
        <svg class="icon" aria-hidden="true">
          <use xlink:href="./images/sprite.symbol.svg#close"></use>
        </svg>
        Close
      ` // Update the button text
      console.log('Closed Button');
    } else {
      // if we closed it, set aria-expanded to false and change text back to "Open"
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.innerHTML = `
        <svg class="icon" aria-hidden="true">
          <use xlink:href="./images/sprite.symbol.svg#menu"></use>
        </svg>
        Open
      `; // Update the button text
      console.log('Open Button')
    }

    console.log("toggle");
  });
}


async function init() {
  const parkData = await getParkData();
  const links = getInfoLinks(parkData.images);

  console.log(parkData);
  setHeaderFooter(parkData);
  setParkIntro(parkData);
  setParkInfoLinks(links);
}

init();
document.addEventListener("DOMContentLoaded", () => {
  enableNavigation();
});
