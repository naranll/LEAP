document.querySelector("#root").innerHTML = "<button id='mybtn'>Button</button>";
let mybtn = document.querySelector("#mybtn");
mybtn.style.backgroundColor = "yellow";

mybtn.addEventListener("click", changeColor());
function changeColor() {
    document.getElementById("mybtn").style.backgroundColor = "blue"; 
}
