let output = "";
count = 1;

for (let row = 1; row <= 3; row++) {
    for (let dash = 3 - row; dash >= 0; dash--) {       // 3-row makes it inverse
        output += " ";
    }
    for (let num = 1; num <= row; num++) {
        output += count + " ";
        count++;
    }
    output += "\n";
}
console.log(output);



