const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-link");
const productButtons = document.querySelectorAll(".product-btn");
const honeyPrice = document.querySelector(".pret-miere");
const honeyImage = document.querySelector(".honey-image");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");
const imagesText = document.getElementById("images-text");
const imagesImg = document.getElementById("images-img");

//Hamburger Menu Section

let img=1;
let imageH2 = document.createElement("h2");
imageH2.textContent = "Următorul apicultor al familiei";
imagesText.appendChild(imageH2);

function changeImg() {
    if (img===1){
        imageH2.textContent = "Următorul apicultor al familiei";
        imagesImg.classList = "";
        imagesImg.classList.add("i1");
    } else if (img===2){
        imageH2.textContent = "";
        imagesImg.classList = "";
        imagesImg.classList.add("i2");
    };
}

btnLeft.addEventListener("click", () => {
    if (img>1){
        img--;
    }
    changeImg();
});

btnRight.addEventListener("click", () => {
    img++;
    changeImg();
})


// btnLeft.addEventListener("click", nah);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}

hamburger.addEventListener("click", mobileMenu);

function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}

navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
})

//Product Button Section

productButtons.forEach(productButton => {
    productButton.addEventListener("click", () => {
        productButtons.forEach(productButton => productButton.classList.remove("orange-button"));
        productButton.classList.add("orange-button");
        if (productButton.id === "mana300"){
            honeyPrice.textContent = "25 RON";
            honeyImage.id = "mana2";
        } else if (productButton.id === "mana450"){
            honeyPrice.textContent = "45 RON";
            honeyImage.id = "mana";
        } else if (productButton.id === "salcam300"){
            honeyPrice.textContent = "20 RON";
            honeyImage.id = "salcam2";
        } else if (productButton.id === "salcam450"){
            honeyPrice.textContent = "35 RON";
            honeyImage.id = "salcam";
        } //Pune floarea soarelui aici
        else if (productButton.id === "poliflora300"){
            honeyPrice.textContent = "15 RON";
            honeyImage.id = "poliflora2";
        } else if (productButton.id === "poliflora450"){
            honeyPrice.textContent = "25 RON";
            honeyImage.id = "poliflora";
        } else if (productButton.id === "rapita300"){
            honeyPrice.textContent = "15 RON";
            honeyImage.id = "rapita2";
        } else if (productButton.id === "rapita450"){
            honeyPrice.textConent = "25 RON";
            honeyImage.id = "rapita";
        } else if (productButton.id === "tei300"){
            honeyPrice.textContent = "15RON";
            honeyImage.id = "tei2";
        } else if (productButton.id === "tei450"){
            honeyPrice.textContent = "30 RON";
            honeyImage.id = "tei";
        } //Pune duo aici
        else if (productButton.id === "polen100"){
            honeyPrice.textContent = "10 RON";
            honeyImage.id = "polen2";
        } else if (productButton.id === "polen200"){
            honeyPrice.textContent = "18 RON";
            honeyImage.id = "polen";
        }
    })
})

/*const telefonFermaBratia = document.querySelectorAll(".telefon-ferma-bratia");

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
}*/
