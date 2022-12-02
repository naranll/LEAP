let line = "";
let n = 5;

for(row = 1; row <= n; row++) {
    for(col = 1; col <= n; col++) {
        if(row == 1 || col == 1 || row == n || col == n) {
            line = line + col + " ";
        } 
        else {
            line += "  ";           // cannot use line = 0; 'case it'll nullify all the number values
        }
    }
    debugger;
    line = line + "\n";
}
console.log(line);

/*
1 2 3 4 5
1       5
1       5
1       5
1 2 3 4 5
*/