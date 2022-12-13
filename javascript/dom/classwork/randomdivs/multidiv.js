let rootdiv = document.querySelector("#root");
rootdiv.style.display = "flex";
rootdiv.style.flexWrap = "wrap";

function randomNum(min, max){
    let r = Math.floor((Math.random() * (max-min) +1));
    return r;
}

for (let i = 0; i < 16; i++) {
    let newdivs = document.createElement("div");
    newdivs.style.border = "1px solid brown";
    newdivs.style.width = "150px";
    newdivs.style.height = "200px";
    newdivs.style.backgroundColor = `rgb(${randomNum(0,225)},${randomNum(0,225)},${randomNum(0,225)})`;

    rootdiv.appendChild(newdivs);
}
