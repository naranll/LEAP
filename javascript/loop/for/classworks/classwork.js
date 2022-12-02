let str = "";
for (let num = 1; num < 10; num++) {
    for (let line = 1; line < 10; line++) {
        str = str + num + "\t";  
        console.log(str);     //unnecessary?
    }
    str = str + "\n";
    debugger;
}
console.log(str);