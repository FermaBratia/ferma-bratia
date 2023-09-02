const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

navLink.addEventListener("click", closeMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}