let myname = "Hi this is Naraa";
let myNum1 = 2;
let myNum2 = 30;
let myNum3 = myNum1 + myNum2;
let istrue = true;
myNum1 = 16;
let myVar;
myVar = 40;
myVar += 1;
let num = 1,
num2 = 3,
num3 = 6;
let long = '"hello"';
let inputnum = prompt("Enter number: ");

console.log(myname);
console.log("Is this name?");
console.log(myNum3);
console.log(myNum1);
console.log(myVar);
console.log(long);

//converting prompt
console.log("next number", inputnum + 1);  
console.log("actually " + (typeof inputnum));
console.log("so again ", parseFloat(inputnum) + 1);

//find first number
let t1, t2, t3;
t1 = 345;
t2 = (t1 - (t1 % 10)) / 10;
t3 = (t2 - (t2 % 10)) / 10;
console.log(t3);
