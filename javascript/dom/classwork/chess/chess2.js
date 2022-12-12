let rootEl = document.getElementById("root");
rootEl.style.display = "flex";
rootEl.style.flexWrap = "wrap"
rootEl.style.width = "850px";


for (let i = 0; i < 64; i++) {
    let newDiv = document.createElement("div");
    rootEl.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    if (i + (Math.floor(i/8)%2)%2 == 0) {
        newDiv.style.backgroundColor = "grey";
    }
}

