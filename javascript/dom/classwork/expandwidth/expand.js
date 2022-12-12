let rootEl = document.getElementById("root");
let boxy = document.createElement("div");
rootEl.appendChild(boxy);
boxy.style.height = "200px";
// boxy.style.width = "100px";
boxy.style.backgroundColor = "blue";
// rootEl.style.display = "flex";
// boxy.style.display = "flex";
rootEl.style.height = "600px";
rootEl.style.width = "600px";

let wid = 50;
setInterval ( function () {
    wid++;
    boxy.style.width = `${wid}px`;
    if(wid == 500) {
        wid = 0;
        rootEl.style.display = "flex";
        rootEl.style.flexWrap = "wrap";
    }
}, 10)