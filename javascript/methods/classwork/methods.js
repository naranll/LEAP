let array = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Purple"];

//AT
console.log(array.at(3));

//CONCAT
let arr2 = ["Pink", "White", "Black"];
let arr3 = array.concat(arr2);
console.log(arr3);

//INCLUDES
console.log(array.includes("Black") + "\n");

//INDEXOF
console.log(array.indexOf("Orange"));
console.log(array.indexOf("Yellow", 3)+ "\n");    //after array[3]

//JOIN
console.log(array.join('') + "\n");

//POP
let popped = array.pop(); //saves popped element
console.log(popped);
console.log(array + "\n");

//PUSH
let pushed = array.push("Grey"); //saves last index
console.log(pushed);
console.log(array + "\n");

//SHIFT
let shifted = array.shift(); //saves shifted element
console.log(shifted);
console.log(array + "\n");

//UNSHIFT 
let unsh = array.unshift("Red"); //saves array length
console.log(unsh);
console.log(array + "\n");

//SORT
console.log(array.sort() + "\n"); //align according to first letter or number

//REVERSE
console.log(array.reverse() + "\n");

//SLICE 
console.log(array.slice(1,5) + "\n");

//SPLICE (STARTindex, DELETEcount, ITEM1, ITEM2, ITEMN)
array.splice(0, 0, "Brown");
console.log(array + "\n");

let arr4 = arr2.splice(0, 1 ,'Brown');
console.log(arr2);
console.log(arr4 + "\n");

//STRING METHODS
//SPLIT
let sent = "The big brown fox jumps over the lazy dog";
console.log(sent); 
console.log(sent.split(' ') + "\n"); //there is a space between ' '  = split by spaces

const chara = sent.split('');   //there is no space netween '' = split by characters
console.log(chara);
console.log(chara[1]);

//if there is nothing in split parenthesis, then nothing splits

//REPLACE & REPLACEALL
console.log(sent.replace("o", "Z"));
console.log(sent.replaceAll("o", "Z" ));

