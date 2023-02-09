let verse = "abc cba";

// let chars = verse.split('');
// let reversed = (verse.split('')).reverse();
// console.log(chars);
// console.log(reversed);

// if (chars[0] == reversed[0] && chars.length != 1) {
//     chars.shift();
//     reversed.shift();
//     console.log("yes");
// } 
// console.log(chars);
// console.log(reversed);

function check(word) {
    let letters = word.split('');
    let reversed = (word.split('')).reverse();
    // console.log(letters);
    // console.log(reversed);
    cut(letters, reversed);
    console.log("yes");
}

function cut(l, r) {
    if (l[0] == r[0] && l.length > 0) {
        l = l.slice(1, l.length);
        r = r.slice(1, r.length);
        cut(l, r);
    }
}

check(verse);