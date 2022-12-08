let person = {
    name: "Jo",                         //blue ones are property
    age: 20,
    score: [12, 34, 2],
    shout : () => {return "yeah"},             //now yellow one is called method, has to write return
    address : {
        country: "Xom",
        city: "ub",
    }
};

console.log(person);
console.log(person.age);
console.log(person.shout());        //'cause is a function

console.log("==============");

console.log(Object.keys(person));
console.log(Object.values(person.name));

/*
//arrow function -- expression function -- can only be used before callling
let func = () => {
    ;
}
//normal function -- can be called before the writing
function get() {
    ;
}
*/


console.log("==============");

let person1 ={
    name: "halu",
} 
let person2 = person1;
console.log(person1.name);

console.log("==============");

//didn't really get this part
// let person3 = {...person}
// let person4 = person1;
// person2[0] = 100;
// console.log(person3);

// console.log("==============");

let v1 = [20,30,40];
let v2 = [...v1];       //"..." - disarms the [] bracket of v1 tTHEN added another [] to make it legit array

v2[0] = 100;
console.log(v1);


