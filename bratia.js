const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");
const telefonFermaBratia = document.querySelectorAll(".telefon-ferma-bratia");

telefonFermaBratia.forEach(telNumber => {
    telNumber.addEventListener("mouseover", () => {
        if (telNumber.id === "madalina-number") {
            telNumber.textContent = "Mădălina";
        } else {
            telNumber.textContent = "Dani";
        }
    })
    telNumber.addEventListener("mouseout", () => {
        if (telNumber.id === "madalina-number") {
            telNumber.textContent = "0753340618";
        } else {
            telNumber.textContent = "0752520282";
        }
    })
});
addEventListener("hover", phoneName);

function phoneName() {
    telefonFermaBratia.text
}

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