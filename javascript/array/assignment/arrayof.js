let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let sum = arrayOfNumbers[0], 
    max = arrayOfNumbers[0], min = arrayOfNumbers[0], 
    newHead = 45, newTail;


for (let i = 1; i < arrayOfNumbers.length; i++) {
    sum = sum + arrayOfNumbers[i];
    
    if(max < arrayOfNumbers[i]) {
        max = arrayOfNumbers[i];
    }

    if(min > arrayOfNumbers[i]) {
        min = arrayOfNumbers[i];
    }
}

console.log(max + " " + min);

// 5,6 left
