import { createElement } from "./helpers.mjs";

export function createOfferTiles(offers) {
  const observer = createIntersectionObserver();
  offers.forEach((offer, index) => {
    const tile = createElement("div", "class", "tile");
    if (index === 0) {
      tile.setAttribute("id", "first");
    }

    tile.appendChild(createElement("h3", "", "", offer.title));
    tile.appendChild(createElement("div", "", "", offer.description));
    tile.appendChild(createElement("div", "", "", offer.price));
    document.getElementById("offers").appendChild(tile);
    observer.observe(tile);
  });
}

function createIntersectionObserver() {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.innerHTML) {
          // setTimeout(() => {
          //   entry.target.innerHTML = "generated";
          // }, 500);
        }
      });
    },
    { rootMargin: "0px 0px 40% 0px", threshold: 0 }
  );
}
