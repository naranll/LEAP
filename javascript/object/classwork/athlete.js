let athletes = [
    {
        name: "London",
        age: 22,
        record: [20, 23, 34, 50],
    },
    {
        name: "George",
        age: 35,
        record: [30, 25, 41, 42],
    },
    {
        name: "Sky",
        age: 19,
        record: [40, 20, 35, 63],
    },
    {
        name: "Perry",
        age: 30,
        record: [34, 28, 46, 50],
    },
]


//WITHOUT FUNCTION
let names = [];
for (let i = 0; i < athletes.length; i++) {
    names[i] = athletes[i].name;

}
console.log(names);

let sum1 = 0;
for(let i = 0; i < athletes.length; i++) {
    sum1 =  sum1 + athletes[i].age;
}
console.log(sum1 / athletes.length);

let sum3 = 0;
for(let i = 0; i < athletes.length; i++) {
    //sum2 should be renewd back to default 0 for every person
    for(let j = 0; j < (athletes[i].record).length; i++) {
        sum2 = sum2 + athletes[i].record[j];
    }
    sum2 = sum2 / (athletes[i].record).length;
    sum3 = sum3 + sum2;
}
console.log(sum3 / athletes.length);


//how to take value from objects inside array???
/*

// function getAverAge(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum / (arr.length);
// }

function getNames(arr, things) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        names[i] = things;
    }
    console.log(names);
}

for(let i = 0; i< athletes.length; i++) {
    getNames(athletes, athletes[i].name);
}
*/

