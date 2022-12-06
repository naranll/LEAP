// 1.find method 2. use function

// let word = "QwerTYuio";
let word = prompt("Enter string to convert");

/*
let wordnew = "";
for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 & word.charCodeAt(i) < 91) {
        // word.charCodeAt(i) += 32; doesn't work so..
        wordnew += (word.charAt(i)).toLowerCase();
        // console.log("upper");
    } else {
        wordnew += (word.charAt(i)).toUpperCase();
        // console.log("lower");
    }
}
console.log(wordnew);
*/

function convert(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) >= 65 & word.charCodeAt(i) < 91) {
            output += (input.charAt(i)).toLowerCase();
        } else {
            output += (input.charAt(i)).toUpperCase();
        }
    }
    return output;
}

console.log(convert(word));
alert(convert(word));

