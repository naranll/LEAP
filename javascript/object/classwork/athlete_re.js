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

function getNames(arr) {
    let names = [];
    for (let i = 0; i < arr.length; i++) {
        names.push(arr[i].name);
    }
    return names;
}

function getAverAge(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return Math.round(sum / arr.length);
}

function getAverSpeed(arr) {
    let allsum = 0;
    for (i = 0; i < arr.length; i++) {
        let personalSum = 0;
        for(j = 0; j < (arr[i].record).length; j++) {
            personalSum += arr[i].record[j];
        }
        personalSum = personalSum / arr[i].record.length;
        allsum += personalSum;
        
    }
    return (allsum / arr.length).toFixed(1);
}


console.log(getNames(athletes));
console.log(getAverAge(athletes));
console.log(getAverSpeed(athletes));