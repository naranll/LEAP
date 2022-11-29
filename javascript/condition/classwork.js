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
/*
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

console.log("")
alert("This is " + weekday); 
*/
//alert only works with +

//logic operators AND nested condition
let weeknum, dayname;
weeknum = 10;
if (weeknum >= 1 && weeknum <= 7) {
    if (weeknum == 1) {
        dayname = "Monday";
    } else if (weeknum == 2) {
        dayname = "Tuesday";
    } else if (weeknum == 3) {
        dayname = "Wednesday";
    } else if (weeknum == 4) {
        dayname = "Thursday";
    } else if (weeknum == 5) {
        dayname = "Friday";
    } else if (weeknum == 6) {
        dayname = "Saturday";
    } else if (weeknum == 7) {
        dayname = "Sunday";
    } else if (weeknum > 7) {
        dayname = "not a valid number";
    }
}
else {
    console.log("error");
}
console.log("========================");

//using SWITCH
let weekday = 9;
switch (weekday) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("error");
}
console.log("========================");

let myday = 6;
switch (myday) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("workday");
        break;
    case 6:
    case 7:
        console.log("weekend");
        break;
    default:
        console.log("Not a day");
}

// same as above
/* if (myday == 1 || myday == 2 || myday == 3 || myday == 4 || myday == 5) {
    console.log("workday");
}
*/

let x = 78, y = 89; z = 35;
if (x > y) {
    if (x > z) {
        console.log(x, " hamgiin ih");
    } else {
        console.log(z, " hamgiin ih");
    }
}

else {
    if (y > z) {
        console.log(y, " hamgiin ih");
    } else {
        console.log(z, "hamgiin ih");
    }
}

//another method for above
if (x > y && x > z) {
    console.log(x, " hamgiin ih");
} else if (y > z) {
    console.log(y, " hangiin ih");
} else {
    console.log(z, "hamgiin ih");
}

//TERNARY
// condition ? true : false;
age = 20;
let mystate = age >= 10 && age <= 18 ? "child" : "adult"; //used often, used with const
console.log(mystate);