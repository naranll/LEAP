let n = parseFloat(prompt("Enter a number"));
let a = 1, b = 1, c;

while (n <= 10) {   
    c = a + b;
    alert(c);
    a = b;
    b = c;
    n++;
}