document.querySelector("#root").innerHTML = "<button id='mybtn'>Button</button>";
let mybtn = document.querySelector("#mybtn");
mybtn.style.backgroundColor = "yellow";

/*
function changeColor() {
    mybtn.style = "background-color : blue"; 
}

mybtn.addEventListener("click", changeColor);
//mybtn.addEventListener("click", changeColor());
//                 dif: the parenthesis behind function name   
*/

//Same as line 6-10
mybtn.addEventListener("click", ()=>(mybtn.style="background-color: green"));