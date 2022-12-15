let rootEl = document.querySelector("#root");
rootEl.innerHTML = "<form><select></select><input></form>";

document.getElementsByTagName("select")[0].setAttribute("id","colorSelect");
let sel = document.getElementById("colorSelect");

document.getElementsByTagName("input")[0].type = "button";

for(let i = 0; i <4 ; i++) {
    let opts = document.createElement("option");
    let texts = ['Red', 'Green', 'White', 'Black'];
    opts.innerHTML = `${texts[i]}`;
    sel.appendChild(opts);
}

// document.getElementsByTagName("option")[i].innerHTML = `${texts[i]}`;