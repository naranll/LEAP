let root = document.getElementById("root");
let prius = document.getElementById("prius");
let lexus = document.getElementById("lexus");

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
let allbtn = document.getElementById("all");
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
function printPrius(carsdata) {
  root.innerHTML = "";
  carsdata.map((car) => {
    if (car.brand == "Toyota") {
      cardMaker(car);
    }
  });
}

prius.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((data) => data.json())
    .then((data) => {
      printPrius(data);
    })
    .catch(() => console.log("no"));
});


//3)Get Lexus
lexus.addEventListener("click", () => {
  fetch("http://localhost:3333/api/cars")
    .then((data) => data.json())
    .then((data) => { 
        printLexus(data);
    })
    .catch(() => console.log("no"));
});

function printLexus(carsdata) {
    root.innerHTML = "";
    carsdata.map((car) => {
        if (car.brand == "Lexus") {
            cardMaker(car);
        }
    })
}


//3) Input car info + pic
