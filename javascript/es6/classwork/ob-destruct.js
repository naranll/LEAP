//ES5
const contacts = {
    name: 'Kim',
    familyName: 'Dune',
    age: 22,
}

let name = contacts.name;
let familyName = contacts.familyName;
let myAge = contacts.age;

//ES6

const contactsNow = {
    name1: 'Kim',
    familyName1: 'Dune',
    age1: 22,
}

let { name1, familyName1, age1 } = contactsNow;

console.log(name1, familyName1, age1);

