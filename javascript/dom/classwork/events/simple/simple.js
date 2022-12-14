let rootEl = document.getElementById("root");
rootEl.style.padding = "20px";

rootEl.innerHTML = "<button id = 'mybtn'></button>"
let myButton = document.getElementById("mybtn");
myButton.style.width = "200px";
myButton.style.height = "50px";
myButton.innerText = "Click to change colors";
myButton.style.color = "black";
rootEl.appendChild(myButton);

function randomNum(min, max) {
    let r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

function randomColor() {
    let myRed = randomNum(0, 200);
    let myGre = randomNum(0, 200);
    let myBlu = randomNum(0, 200);
    return [myRed, myGre, myBlu];
}

function myFunc() {
    for (let i = 0; i < 2; i++) {
        let newDivs = document.createElement("div");
        newDivs.style.border = "1px solid black";
        newDivs.style.width = "200px";
        newDivs.style.height = "50px";

        let myColor = randomColor();
        newDivs.style.backgroundColor = `rgb(${myColor[0]},${myColor[1]},${myColor[2]})`;
        rootEl.appendChild(newDivs);
    }

}
myButton.addEventListener("click", myFunc);




