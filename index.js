const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
