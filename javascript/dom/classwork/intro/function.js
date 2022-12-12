// document.getElementById("root").innerText = "Hello world";
// document.getElementById("hellotext").innerHTML = "Hello World!";
// document.getElementsByClassName("dummy")[0].innerText = "Dummy text";
// document.getElementsByTagName("body")[0].innerText = "hello";
// document.querySelector('#root');
// document.querySelector('.dummy'); //array of elements

// document.getElementById("root").innerHTML = "<div class = 'darkmode'><h1>sdfg</h1></div><div id= 'profile><h2>Names</h2></div>";
// document.getElementsByTagName("img")[0].alt = "not bla";
// document.getElementsByTagName("img")[0].src = "https://picsum.photos/200/300";
// document.getElementById("profile").style.color = "blue";

//Example

let rootElement = document.getElementById("root");
let ulElement = document.createElement("ul");
rootElement.appendChild(ulElement);
//same as let rootElement = document.getElementById("root").innerHTML.appendchild();

for(let i = 0; i< 20; i++) {
    let liElement = document.createElement("li");
    liElement.innerText = i.toString();
    liElement.appendChild(liElement);
}