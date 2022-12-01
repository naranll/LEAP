let mystr = "single quote' double quote\" ";
let lyrics = "Baby shark \n Baby shark";   //space before and after \n quotes counts
console.log(mystr);
console.log(lyrics);
console.log(lyrics.length);
console.log(lyrics.charAt(5));
console.log(lyrics[2]);
console.log(lyrics[lyrics.length - 1]);
// /t - tab   /f - feed  /r - return   /b     // - backslash

let firstName = "Helen";
let lastName = firstName.concat(' '+ 'Nion'); // adding strings
console.log(lastName);

let word = "15278 octopushotidocto";

console.log(word.substring(2,4));    // substring([starting point], [ending point])
console.log(word.substr(0,3));   //substr([starting point], [lenght])
console.log(word.indexOf("octopus")); //starting point

console.log(word.toUpperCase());
console.log(word.toLowerCase());

//cutting off a specific string 
let startOne = word.indexOf("octo");
let firstPart = word.substring(0, startOne);
let lastPart = word.substring( startOne + "octo".length, word.length );
console.log(firstPart.concat(" " + lastPart));

let word2 = firstPart.concat(" " + lastPart);
startOne = word2.indexOf("octo");
firstPart = word2.substring(0, startOne);
lastPart = word2.substring( startOne + "octo".length, word2.length );
console.log(firstPart.concat(" " + lastPart));

//numbers~

console.log(Number.isInteger(-10)); //check integer or not
number = 78.56789;
console.log(number.toFixed(2)); //rounding
console.log(Math.floor(7.5));
console.log(Math.ceil(7.5));

console.log(
   Math.floor(Math.random() * 6) );