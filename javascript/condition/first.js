// conditional operator
let a = 20;
let b = 20;
console.log(a >= b);
console.log(a < b);
console.log(a == b);
console.log(a != b);

//strict equality === checks even the data types unlike ==
let answer = a === b;
console.log(!answer);

//age => allowed or not
let myAge = 16;
if (myAge >= 21) {
    console.log("You can enter");
}
else {
    console.log("You cannot enter");
}

if (myAge < 11) {
    console.log("You're a child");
}
else if (myAge < 18) {
    console.log("You're a teenager");
}
else if (myAge < 40) {
    console.log("You're an adult");
}
else {
    console.log("You're in your old state");
}

// weeknum => weekday
let day = prompt("Enter a day as number:");
let weekday;
if (day == 1) {
    weekday = "Monday";
    
} 
else if (day == 2) {
    weekday = "Tuesday";
}
else if (day == 3) {
    weekday = "Wednesday";
}
else if (day == 4) {
    weekday = "Thursday";
}
else if (day == 5) {
    weekday = "Friday";
}
else if (day == 6) {
    weekday = "Saturday";
}
else if (day == 7) {
    weekday = "Sunday";
}
else if (day > 7) {
    weekday = "not a valid number";
}
else {
    weekday = "not a number";
}

alert("This is " + weekday); 
//alert only works with +