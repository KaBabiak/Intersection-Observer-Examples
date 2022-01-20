import { getCategories } from "./api-queries.mjs";
import { createElement } from "./helpers.mjs";

export async function populateCategorySelect() {
  const categories = await getCategories();
  const categoriesSelect = document.getElementById("category");

  categories.forEach((category) => {
    const option = createElement(
      "option",
      "value",
      category.name,
      category.name
    );
    categoriesSelect.appendChild(option);
  });
}
