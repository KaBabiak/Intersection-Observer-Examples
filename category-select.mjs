export async function populateCategorySelect() {
  const categories = await getCategories();
  const categoriesSelect = document.getElementById("category");

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.setAttribute("value", category.name);
    option.innerText = category.name;
    categoriesSelect.appendChild(option);
  });
}

async function getCategories() {
  let data = [];
  try {
    const response = await fetch(
      "http://backend-recruitment-api.herokuapp.com/category/"
    );
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data.sort((a, b) => b.ordering - a.ordering);
}
