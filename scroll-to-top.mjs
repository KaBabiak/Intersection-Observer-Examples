export function createScrollToTop() {
  var intersectionObserver = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting && document.getElementById("first")) {
        document.getElementById("button").style.display = "block";
      } else {
        document.getElementById("button").style.display = "none";
      }
    },
    { threshold: 0.55 }
  );

  intersectionObserver.observe(document.getElementById("first"));

  document.getElementById("button").addEventListener("click", scroll);
}

function scroll() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
