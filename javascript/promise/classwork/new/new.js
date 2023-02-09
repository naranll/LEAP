let arr = [
    { name: "bob", age: 20 },
    { name: "oli", age: 23 },
];

let newArr = arr;

newArr[1].name = "holi";
console.log(newArr);

console.log(arr[1].name);
console.log(newArr[1].name);

//changes original array as well