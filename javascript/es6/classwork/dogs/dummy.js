let selector = document.querySelector("select");
let imgCard = document.querySelector(".card");

imgCard.style.width = "300px";
imgCard.style.height = "300px";

function getDogbreed() {
    fetch("https://dog.ceo/api/breeds/list")
        .then((data) => data.json())
        .then((data) => {console.log(data.message); addOption(data.message);}
    );
}

function addOption(array) {
    for (let i = 0; i < array.length; i++) {
        selector.appendChild(document.createElement("option"));
        let myOpt = document.getElementsByTagName("option")[i];
        myOpt.innerText = `${array[i]}`;
        getImage(array[i]);
    }
    return array;
}

getDogbreed();

function getImage(breedName){
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random`)
    .then((data) => data.json())
    .then((data) => { 
        imgCard.innerHTML = `<img src='${data.message}'>`
    });
}

selector.addEventListener("change",()=> {

})




