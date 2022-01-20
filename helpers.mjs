export function createElement(elementType, atribute, value, innerText = "") {
  const newElement = document.createElement(elementType);
  newElement.innerText = innerText;
  if (atribute !== "") {
    newElement.setAttribute(atribute, value);
  }
  return newElement;
}
