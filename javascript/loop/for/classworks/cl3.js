let line = "";
let n = 5;

for(row = 1; row <= n; row++) {
    for(col = 1; col <= n-1; col++) {
        if(col < row) {
            line = line + "* ";
        } 
        else {
            line += " ";           // cannot use line = 0; 'case it'll nullify all the number values
        }
    }
    debugger;
    line = line + "\n";
}
console.log(line);

/*
* 
* *
* * * 
* * * *
*/