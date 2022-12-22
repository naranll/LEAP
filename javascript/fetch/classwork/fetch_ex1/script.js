const form = document.querySelector("form");
const countriesContainer = document.querySelector(".countries");
// https://restcountries.com/v3.1/name/${country}
// https://restcountries.com/v3.1/alpha/${neighbour}


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
        </div>
    </article>`;
    countriesContainer.innerHTML = myhtml;
}

//a function that fetches the info of a given country
function getCountry(country) {
    fetch(`https:restcountries.com/v3.1/name/${country}`)
        .then((response) => response.json())
        .then((data) => smallIntro(data[0]));
}

getCountry("mongolia");

