let rootEl = document.getElementById("root");
rootEl.style.display = "flex";
rootEl.style.flexWrap = "wrap";

function randomer(min, max) {
    let r = Math.floor(Math.random() * (max - min) + min);
    return r;
}

function clickOdd() {
    rootEl.innerHTML = "";
    let myRed = randomer(0, 200);
    let myGre = randomer(0, 200);
    let myBlu = randomer(0, 200);
    for (let i = 0; i < 16; i++) {
        let myDivs = document.createElement("div");
        myDivs.style.width = "100px";
        myDivs.style.height = "100px";
        myDivs.style.border = "2px solid black";
        myDivs.style.borderRadius = "50%"

        myDivs.style.backgroundColor = `rgb(${myRed},${myGre},${myBlu})`;
        rootEl.appendChild(myDivs);

        if (i == 15) {
            let odd = document.getElementsByTagName("div")[randomer(0, 15)];
            odd.style.backgroundColor = `rgb(${myRed + 20},${myGre + 20},${myBlu + 20})`;
            odd.addEventListener("click", clickOdd);
        }
    }
}

clickOdd();

