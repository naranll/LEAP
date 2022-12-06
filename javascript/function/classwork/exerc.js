let number1 = parseFloat(prompt("First number"));
let number2 = parseFloat(prompt("Second"));

function add(n1, n2) {
   // return n1 + n2;
    if(!isNaN(parseFloat(n1)) && !isNaN(parseFloat(n2))) {
        return n1+n2;
    } else {
        return "input is not a number";
    }
}

let result = add(number1, number2);

console.log("The sum: " + result);
alert("Sum is " + result);