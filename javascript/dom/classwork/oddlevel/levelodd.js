let rootEl = document.getElementById("root");
rootEl.style.display = "flex";
rootEl.style.flexWrap = "wrap";

let buttonMaster = document.createElement("button");
rootEl.appendChild(buttonMaster);

function randomer(min, max) {
    let r = Math.floor(Math.random() * (max-min) + min);
}

function expander() {
    let myRed = randomer(0,200);
    let myGre = randomer(0,200);
    let myBlu = randomer(0,200);
    for (let row = 1; row < 5; row++) {
        let newDivs = document.createElement("div");
        newDivs.style.width = "100px";
        newDivs.style.height = "100px";
        newDivs.style.border = "2px solid black";
        let odd = document.getElementsByTagName("div")[randomer(0,row)];

        if (row % 2 == 1) {
            buttonMaster.addEventListener("click", expander);
            rootEl.appendChild(newDivs);
            
            odd.style.backgroundColor = "aqua";
        }
        
        

    }

}
expander();
