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

//Image Gallery Section

if (imagesText){
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
        imageH2.textContent = "Cu stupii în pastoral";
        imagesImg.classList = "";
        imagesImg.classList.add("i2");
    } else if (img===3){
        imageH2.textContent = "Stupina noastră";
        imagesImg.classList = "";
        imagesImg.classList.add("i3");
    } else if (img===4){
        imageH2.textContent = "Dani la muncă";
        imagesImg.classList = "";
        imagesImg.classList.add("i4");
    } else if (img===5){
        imageH2.textContent = "Mădălina și Dani";
        imagesImg.classList = "";
        imagesImg.classList.add("i5");
    } else if (img===6){
        imageH2.textContent = "Familia noastra de albine";
        imagesImg.classList = "";
        imagesImg.classList.add("i6");
    }
    ;
}

btnLeft.addEventListener("click", () => {
    if (img>1) {
        img--;
    } else {
        img = 6;
    }
    changeImg();
});

btnRight.addEventListener("click", () => {
    if (img<6){
        img++;
    } else {
        img = 1;
    }
    changeImg();
})
}


//Product Button Section

productButtons.forEach(productButton => {
    productButton.addEventListener("click", () => {
        productButtons.forEach(productButton => productButton.classList.remove("orange-button"));
        productButton.classList.add("orange-button");
        if (productButton.id === "mana450"){
            honeyPrice.textContent = "25 RON";
            honeyImage.id = "mana2";
        } else if (productButton.id === "mana1000"){
            honeyPrice.textContent = "45 RON";
            honeyImage.id = "mana";
        } else if (productButton.id === "salcam450"){
            honeyPrice.textContent = "20 RON";
            honeyImage.id = "salcam2";
        } else if (productButton.id === "salcam1000"){
            honeyPrice.textContent = "35 RON";
            honeyImage.id = "salcam";
        }
        else if (productButton.id === "soare450"){
            honeyPrice.textContent = "15 RON";
            //Pune imaginea aici
        }
        else if (productButton.id === "soare1000"){
            honeyPrice.textContent = "25 RON";
            honeyImage.id = "floarea-soarelui";
        }
        else if (productButton.id === "poliflora300"){
            honeyPrice.textContent = "10 RON";
            honeyImage.id = "poliflora3";
        }
        else if (productButton.id === "poliflora450"){
            honeyPrice.textContent = "15 RON";
            honeyImage.id = "poliflora2";
        } else if (productButton.id === "poliflora1000"){
            honeyPrice.textContent = "25 RON";
            honeyImage.id = "poliflora";
        } else if (productButton.id === "rapita450"){
            honeyPrice.textContent = "15 RON";
            honeyImage.id = "rapita2";
        } else if (productButton.id === "rapita1000"){
            honeyPrice.textContent = "25 RON";
            honeyImage.id = "rapita";
        } else if (productButton.id === "tei450"){
            honeyPrice.textContent = "15RON";
            honeyImage.id = "tei2";
        } else if (productButton.id === "tei1000"){
            honeyPrice.textContent = "30 RON";
            honeyImage.id = "tei";
        } else if (productButton.id === "duo1000"){
            honeyPrice.textContent = "30 RON";
            honeyImage.id = "duo";
        } else if (productButton.id === "duo300"){
            honeyPrice.textContent = "15 RON";
            honeyImage.id = "duo3";
        } else if (productButton.id === "capaceala1000"){
            honeyPrice.textContent = "35 RON";
            honeyImage.id = "capaceala";
        } else if (productButton.id === "capaceala450"){
            honeyPrice.textContent = "20 RON";
            honeyImage.id = "capaceala2";
        }
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
