document.querySelector("#root").innerHTML = "<div id = 'colorme' ></div>";
let myDiv = document.getElementById("colorme");
myDiv.style.border = "2px solid pink";
myDiv.style.width = "500px";
myDiv.style.height = "500px";

let col = 0;
const colorChange = setInterval( function() {
    myDiv.style.backgroundColor = `rgb(50,${col},${col})`;
    col++;
},80);

