let rootEl = document.getElementById("root");
let boxy = document.createElement("div");
rootEl.appendChild(boxy);
boxy.style.height = "200px";
boxy.style.backgroundColor = "purple";
// rootEl.style.display = "flex";
// boxy.style.display = "flex";
rootEl.style.height = "600px";
rootEl.style.maxWidth = "600px";

let wid = 50;
setInterval ( function () {
    wid++;
    boxy.style.width = `${wid}px`;
    if(boxy.style.width == rootEl.style.maxWidth) {
        wid = 0;
        // boxy.style.marginTop = "700px";
    }
}, 10)