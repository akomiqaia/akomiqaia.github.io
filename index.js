// hamburger menu
const hamburger = document.getElementById("hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  navbar.classList.toggle("navbar-is-active")
})