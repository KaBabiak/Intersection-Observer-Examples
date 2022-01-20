import { getOffersFromCategory } from "./api-queries.mjs";
import { populateCategorySelect } from "./category-select.mjs";
import { createElement } from "./helpers.mjs";
import { createOfferTiles } from "./infinite-scroll.mjs";
import { createScrollToTop } from "./scroll-to-top.mjs";

populateCategorySelect();

var category = document.getElementById("category");
category.addEventListener("change", createStart);

async function createStart() {
  document.getElementById("offers").innerHTML = "";
  const categoryName = category.options[category.selectedIndex].value;
  if (categoryName === "") {
    document
      .getElementById("offers")
      .appendChild(createElement("div", "", "", "Hi! Please choose an option"));
  } else {
    const offers = await getOffersFromCategory(categoryName);
    console.log(offers);
    createOfferTiles(offers);
    createScrollToTop();
  }
}
