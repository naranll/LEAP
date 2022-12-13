let rootdiv = document.querySelector("#root");
rootdiv.style.display = "flex";
rootdiv.style.flexWrap = "wrap";
rootdiv.style.gap = "10px";

function randomy(min, max) {
    let r = Math.floor(Math.random() * (max - min));
    return r;
}

let red = randomy(0, 200);
let green = randomy(0, 200);
let blue = randomy(0,200);

for (let i = 0; i < 16; i++) {
    let divs = document.createElement("div");
    divs.style.border = "2px solid black";
    divs.style.borderRadius = "50%";
    divs.style.width = "150px";
    divs.style.height = "150px";

    divs.style.backgroundColor = `rgb(${red},${green},${blue})`;
    rootdiv.appendChild(divs);

    if(i == 15) {
        let odd = document.getElementsByTagName('div')[randomy(0,16)];
        odd.style.backgroundColor = `rgb(${red + 20},${green + 20},${blue + 10})`;
    }
}

