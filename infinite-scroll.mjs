//infinity scroll is disabled

import { deleteOffer } from "./api-queries.mjs";
import { createElement } from "./helpers.mjs";

export function createOfferTiles(offers) {
  const observer = createIntersectionObserver();
  offers.forEach((offer, index) => {
    const tile = createElement("div", "class", "tile");
    tile.setAttribute("id", `offer_${offer.id}`);
    const deleteButton = createElement("div", "class", "delete-button", "x");

    deleteButton.setAttribute("id", index);
    deleteButton.addEventListener("click", () => deleteOffer(offer.id));
    const details = createElement("div", "class", "details");

    details.appendChild(createElement("div", "", "", offer.title));
    details.appendChild(
      createElement("div", "class", "detail", offer.description)
    );
    details.appendChild(createElement("div", "class", "detail", offer.price));

    tile.appendChild(details);
    tile
      .appendChild(createElement("div", "class", "button"))
      .appendChild(deleteButton);
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
