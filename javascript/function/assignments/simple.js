//print name with function
let myName = "Josh George";
function printName(name) {
    console.log(name);
}

printName(myName);

//return full name
let myFirstName = "Red", myLastName = "Liir"
function fullN(firstn, lastn) {
    return firstn + " " + lastn;
}

console.log(fullN(myFirstName, myLastName));

//return sum 
let number1 = 67, number2 = 98;
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(number1, number2))

//calculate triangle area
let high = 10, side = 28;
function area(h, a) {
    return (h * a) / 2;
}
console.log(area(high, side));

//triangle perimeter
let side1 = 14, 
    side2 = 17,     
    side3 = 16;
function triperi(s1,s2,s3) {
    return s1+s2+s3;
}
console.log(triperi(side1,side2,side3));