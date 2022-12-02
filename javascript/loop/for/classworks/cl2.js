let line = "";
let n = 5;

for(row = 1; row <= n; row++) {
    for(col = 1; col <= n; col++) {
        if(row == 1 || col == 1 || row == n || col == n) {
            line = line + row + " ";
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
1 1 1 1 1
2       2
3       2
4       2
5 5 5 5 5
*/