const button = document.querySelector("#send");

button.addEventListener("click", () =>
  alert(
    "Formularz jest aktualnie wyłączony, prosimy o kontakt pod adresem mailowym kontakt@radcaszczecin.eu"
  )
);

// POLYFILL SCROLL
// ----------------------------------

document.querySelector("html").style.scrollBehavior = "auto";
const scroll = new SmoothScroll('.navbar a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true,
  // offset: 50,
});
