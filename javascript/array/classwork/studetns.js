let studentAges = [10, 20, 30];
console.log(studentAges[0]);

for (let el = 0; el < studentAges.length - 1; el++) {
    console.log(studentAges[el]);
}

let studentNames = ["Bold", "dorj", "tetstge"];
let i = 0;
while (i <= studentNames.length) {
    if (studentNames[i] && studentNames[i][0] === "d") {
        console.log(studentNames[i]);
    }
    i++;
}

if (2) {
    console.log("bla");
} else {
    console.log("else");
}