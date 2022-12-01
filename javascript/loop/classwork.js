// let count = 20;
// while (count >= 1) {
//     console.log(count);
//     count -= 1;
// }

let letter = "i";
let count = 0;
let index = 0;
let essay = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

while (index < essay.length) {
    if (essay.charAt(index) == letter || essay.charAt(index) == letter - 32) {
        count = count + 1;
    }
    index = index + 1;
}
console.log("This many " + letter + " in this text: " + count);

console.log("========================");

let num = 789;
let count3 = 0;
while (num > 0) {
    if (num % 5 == 0) {
        count3 = count3 + 1;
    }
    num = num - 1;
}
console.log("Numbers divided by 3: " + count3);

console.log("========================");

let n = 1, sum = 0;
while (n <= 10) {
    sum = sum + n;
    n += 1;
}
console.log(sum);

console.log("========================");

let x = 10;
let headCount = 1;
let output = "";  //converting tool
while (x > 0) {
    let y = 10;
    while (y > 0) {
        output = output + headCount * 2 + "\t"; //even spacing
        if (headCount % 10 == 0) output = output + "\n";  //new line
        y--;
        headCount++;
    }
    x--;
}
console.log(output);

console.log("========================");

let day = 0, mon = 1;

while (day < 30) {
    mon = mon * 2;
    day++;
}

console.log(mon);