let num1 = parseFloat(prompt("Enter a num: "));
let num2 = parseFloat(prompt("Enter a num: "));
let num3 = parseFloat(prompt("Enter a num: "));

function maxnum(n1,n2,n3) {
    if(n1>n2) {
        if(n1>n3) {
            return n1;
        } else {
            return n3;
        }
    } else {
        if(n2>n3) {
            return n2;
        } else {
            return n3;
        }
    }
}

let results = maxnum(num1, num2, num3);
console.log("max num is: " + results);
alert("max num is: " + results);
