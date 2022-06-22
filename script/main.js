document
  .querySelector("#contactForm")
  .addEventListener("submit", () => alert("Twoja wiadomość została wysłana!"));

// POLYFILL SCROLL
// ----------------------------------
document.querySelector("html").style.scrollBehavior = "auto";
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
});
