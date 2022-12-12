let students = [
    {
        name: "Сэд-Эрдэнэ",
        age: 19,
        gender: "male",
    },
    {
        name: "Индра",
        age: 19,
        gender: "female",
    },
    {
        name: "Хатнаа ",
        age: 21,
        gender: "male",
    },
    {
        name: "Тэмүүлэн",
        age: 23,
        gender: "male",
    },
    {
        name: "Намуун",
        age: 23,
        gender: "female",
    },
];

function findGender() {
    let girls = 0, boys = 0;
    for (let i = 0; i < students.length; i++) {
        if (students[i].gender == "male") {
            boys++;
        } else girls++;
    }
    return boys + '/'+ girls;
}

function addName(){
    let lname = "Sambuu";
    let newnames = [];
    for(let i = 0; i <students.length; i++) {
       students[i].name = (students[i].name).concat(lname);
       newnames[i] = students[i].name;
    }   
    return newnames;
}

function avrAge() {
    let ages = 0;
    for(let i = 0; i<students.length; i++) {
        ages += students[i].age;
    }
    return ages / students.length;
}

function sameAge(){
    let same = [];
    for(let i = 0; i<students.length; i++) {
        same.push(students[i].age);
    }
    return same;
}

console.log("Male/Female:", findGender());
console.log(addName());
console.log("Average age:", avrAge());
console.log(sameAge());

