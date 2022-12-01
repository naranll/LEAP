let n = parseFloat(prompt("Enter a number"));
let a = 1, b = 1, c, i=1;

//fic output method

while (i <= n) {   
    c = a + b;
    console.log(c);
    alert(c);
    a = b;
    b = c;
    i++;
}