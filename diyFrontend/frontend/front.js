let root = document.getElementById("root");
root.style.display = "flex";
root.style.flexWrap = "wrap";
root.style.gap = "10px";


//1) All cars
let allbtn = document.getElementById("all");
allbtn.innerText = "All cars";
allbtn.addEventListener("click", () => {
    fetch("http://localhost:3333/api/cars")
        .then((data) => data.json())
        .then((data) => {
            console.log(data);
            printCars(data);
        })
        .catch(() => console.log("no"));
});

function printCars(carsdata) {
    root.innerHTML = "";
    carsdata.map((cars) => {
        // console.log("Cars:", cars);
        let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src= "${cars.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cars.model}</h5>
                <p class="card-text">Brand:${cars.brand}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
        root.appendChild(newDiv);
    })
}

//2) Get prius/lexus
let prius = document.getElementById('prius');
let lexus = document.getElementById('lexus');

function printPrius(carsdata) {
    root.innerHTML = "";
    carsdata.map((cars) => {
        if (cars.brand == "Toyota") {
            console.log(cars);
            let newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src= "${cars.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${cars.model}</h5>
                <p class="card-text">Brand:${cars.brand}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
        root.appendChild(newDiv);
        }
    })
}

prius.addEventListener("click", () => {
    fetch("http://localhost:3333/api/cars")
        .then((data) => data.json())
        .then((data) => {
            printPrius(data);
        })
        .catch(() => console.log("no"));
}
)

//3) Input car info + pic
