let users = [
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
        name: "Sk0",
        age: 19,
        record: [40, 21, 35, 63],
    },
    {
        name: "Perry",
        age: 30,
        record: [34, 28, 46, 50],
    },
]

const getUsersName = (users) => {
    let names = [];
    for (let i = 0; i < users.length; i++) {
        names.push(users[i].name);
    }
    return names;
}

console.log(getUsersName(users));

let names = [];
const anotherNames = users.map((user) => {
    names.push(user.name);
    console.log(names);
})
