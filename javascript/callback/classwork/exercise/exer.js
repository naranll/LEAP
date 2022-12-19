/*
let myButton = document.getElementById("root");

//function something() will print "Clicked" in console 
const something = () => {
    console.log("Clicked");
};
//if clicked, the "root" element will callback function something()
myButton.addEventListener("click",something);
myButton.innerText = "Click here";

*/


//show height percent with scroll

document.querySelector("#root").innerHTML = "<div id = 'show'></div>";
window.addEventListener("scroll", () => {
    let percent = Math.floor((window.scrollY * 100)/ (document.querySelector("body").clientHeight - window.innerHeight));
    document.querySelector("#show").innerText = `${percent}%`;
    // console.log(percent);
});


