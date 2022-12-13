document.querySelector("#root").innerHTML = "<div class='newdiv' id = 'newdiv' lang = 'eng'></div>";
document.getElementById("newdiv").style.backgroundColor = "yellow";

let count = 50;
let stretch = setInterval ( function() {
    count++;
    document.querySelector('.newdiv').style.width = `${count}px`;
    document.getElementById("newdiv").style.height = `${count}px`;
    if(count == 200) {
        document.getElementById("newdiv").style.backgroundColor = "orange";
    } 
    if(count == 300) {
        document.getElementById("newdiv").style.backgroundColor = "red";
    } 
    if(count == 500) {
        clearInterval(stretch);
    }
    
},10);


// document.getElementById("newdiv").style.height = `${count}px`;
// document.querySelector('.newdiv').style.width = `${count}px`;

document.getElementsByClassName("newdiv")[0].innerText = "Growing Box";

document.getElementsByTagName('div')[1].lang = "french";




