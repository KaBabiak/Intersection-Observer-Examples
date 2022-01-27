export async function getCategories() {
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

export async function getOffersFromCategory(categoryName) {
  let data = [];
  try {
    const response = await fetch(
      "http://backend-recruitment-api.herokuapp.com/offers"
    );
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return data.filter((element) => element.category_name === categoryName);
}

export function deleteOffer(id) {
  fetch("http://backend-recruitment-api.herokuapp.com/offers/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      res.text();
      document.getElementById(`offer_${id}`).remove();
    })
    .then((res) => console.log(res));
}
