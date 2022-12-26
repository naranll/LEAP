let container = document.querySelector("#container");
let selector = document.querySelector("#breeds");

document.createElement("option");
let dogBreeds = document.querySelector("option");
dogBreeds.innerHTML = `breedslectedfrom fetch`;

fetch("https://dog.ceo/api/breeds/list/all")
    .then((data) => console.log(data))
    .catch((data) => console.log("failed"));