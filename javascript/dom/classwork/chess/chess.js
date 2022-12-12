let rootEl = document.getElementById("root");
rootEl.style.display = "flex";
rootEl.style.flexWrap = "wrap"
rootEl.style.width = "850px";

/*
for (let i = 0; i < 64; i++) {
    console.log(i);
    let newDiv = document.createElement("div");
    rootEl.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    if ((i) % 2 == 0) {
        newDiv.style.backgroundColor = "grey";
    }
}
*/

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        console.log(i);
        let newDiv = document.createElement("div");
        rootEl.appendChild(newDiv);
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.border = "1px solid black";
        if ((i+j) % 2 == 0) {
            newDiv.style.backgroundColor = "grey";
        }
    }
}