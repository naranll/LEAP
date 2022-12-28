let root = document.getElementById("root");
let prius = document.getElementById("prius");
let lexus = document.getElementById("lexus");
let allbtn = document.getElementById("all");

root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "10px";

//card maker
function cardMaker(cardata) {
  let newDiv = document.createElement("div");
  newDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src= "${cardata.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cardata.model}</h5>
                <p class="card-text">Brand:${cardata.brand}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
  root.appendChild(newDiv);
}

//1) All cars
allbtn.innerText = "All cars";
allbtn.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((data) => data.json())
    .then((data) => {
      // console.log(data);
      printCars(data);
    })
    .catch(() => console.log("no"));
});

function printCars(carsdata) {
  root.innerHTML = "";
  carsdata.map((car) => {
    cardMaker(car);
  });
}

//2) Get Prius
prius.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((data) => data.json())
    .then((data) => {
        root.innerHTML = "";
        data.map((car) => {
          if (car.brand == "Toyota") {
            cardMaker(car);
          }
        });
    })
    .catch(() => console.log("no"));
});

//3)Get Lexus
lexus.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((data) => data.json())
    .then((data) => {
        root.innerHTML = "";
        data.map((car) => {
          if (car.brand == "Lexus") {
            cardMaker(car);
            console.log(car);
          }
        })
    })
    .catch(() => console.log("no"));
});

//3) Send input to backend
let addInfo = document.getElementById("addInfo");
addInfo.addEventListener("click", () => {
    let cmodel = getValue(document.querySelector("#carModel"));
    let cbrand = getValue(document.querySelector("#carBrand"));
    let cimglink = getValue(document.querySelector("#carImage"));
    let newObj = {
        model: `${cmodel}`,
        brand: `${cbrand}`,
        image: `${cimglink}`,
    }
    // console.log(newObj);
    fetch("http://localhost:3333/api/cars", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj),
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch(()=>console.log("fetch error"))
})

function getValue(inpt){
    return inpt.value;
}