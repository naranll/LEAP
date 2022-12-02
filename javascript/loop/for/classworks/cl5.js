//prompt password endlessly 'till it's right

let pass = "qwerty";

do{
    let userInput = prompt("Enter pass: ");
} while(userInput != pass);

alert("Pass is right");
