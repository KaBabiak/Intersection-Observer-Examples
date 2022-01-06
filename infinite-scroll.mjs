export function createTiles(tilesNumber = 50) {
  const observer = createIntersectionObserver();
  for (let i = 0; i < tilesNumber; i++) {
    const tile = document.createElement("div");
    tile.setAttribute("class", "tile");
    if (i === 0) {
      tile.setAttribute("id", "first");
    }
    document.body.appendChild(tile);
    observer.observe(tile);
  }
}

function createIntersectionObserver() {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.innerHTML) {
          setTimeout(() => {
            entry.target.innerHTML = "generated";
          }, 500);
        }
      });
    },
    { rootMargin: "0px 0px 40% 0px", threshold: 0 }
  );
}
