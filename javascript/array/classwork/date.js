//current time

let now = new Date();
console.log(now);

//epoch date
// let Jan02_2000 = new Date(1);
// console.log(Jan02_2000);

//31 dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969);

let date = new Date();
console.log(date.getHours());

let today = new Date();
// console.log(today.setHours(0));
console.log(today.setHours(0, 0 , 0, 0));

let date2 = new Date(2016, 1, 28);
date2.setDate(date.getDate() + 2);
console.log(date);

