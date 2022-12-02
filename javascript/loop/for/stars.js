let n = Number(prompt("Enter number"));
let line = "";
for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
        // line = line + "*";   without if condition
        // console.log(line);  useless 'cause console log is new line on 
        if (col == 0 || col == n-1 || row == 0 || row == n-1) {
            line += "*" + " ";
        } else {
            line += "  ";
        }
        
    }
    // console.log("\n");
    // debugger;
    line = line + '\n';
}
console.log(line);
alert(line);