const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
const inputBox = document.querySelector(".btn-country");
const enterBtn = document.querySelector(".submit-btn");
const mainContain = document.querySelector(".container");

//funtion that gets the input value
inputBox.addEventListener("input", () => inputBox.value);

//when you click the button it will pass the input value to get country
enterBtn.addEventListener("click", () => {
    let inputCountry = inputBox.value;
    getCountry(inputCountry);
});

//a function that fetches the info of a given country
function getCountry(country) {
    fetch(`https:restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => smallIntro(data[0]));
}

//a function that fetches and showcases the corresponding info of pre-set values 
function smallIntro(country) {
    console.log(country);
    const myhtml = `<article class="country">
        <img class="country__img" src="${country.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${country.name.common}</h3>
            <h4 class="country__region">${country.region}.</h4>
            <p class="country__row"><span>👫</span>${(country.population)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(country.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(country.currencies)[0].symbol}</p>
            ${country.borders ? `<p class="country__row"><span>🏘</span>${country.borders.length < 5 ? country.borders : (country.borders.slice(0, 4) + ' etc.')} </p>` : ""}
        </div>
    </article>`
    countriesContainer.innerHTML = myhtml;
}

/*
//neighbour cards
function neighbourIntro(country) {
    console.log(country);
    const myhtml = `<div class="country">
        <img class="country__img" src="${country.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${country.name.common}</h3>
            <h4 class="country__region">${country.region}.</h4>
            <p class="country__row"><span>👫</span>${(country.population)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(country.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(country.currencies)[0].symbol}</p>
            ${country.borders ? `<p class="country__row"><span>🏘</span>${country.borders} </p>` : ""}
        </div>
    </div>`
    mainContain.innerHTML = myhtml;
}

function getCountryNeighbours(neighbour) {
    fetch(`https:restcountries.com/v3.1/alpha/${neighbour}`)
        .then((response) => response.json())
        .then((data) => neighbourIntro(data[0]));
}
*/
