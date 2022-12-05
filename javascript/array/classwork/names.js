let names = ["qwertyu", "qwerty", "qwertyuio"];
let longest;

// A
// let max = names[0].length;
// for( let i = 1; i < names.length ; i++ ) {
//     if(max < names[i].length) {
//         max = names[i].length;
//     }  
// }


// B
let max;
for( let i = 0; i < names.length - 1 ; i++ ) {
    max = names[0].length;
    if(max < names[i+1].length) {
        max = names[i+1].length;
    }  
}

console.log(max);

/*
Version A: started counter tool i from 1 because we gave array[0]'s value to max at first. 
Version B: original idea was right but the major problem was that the limit of loop names,lenght was not measured right;
in actual array[i+n].lenght works but it exceeded limit as i wrote "i<=names.lenght -1" it was not supposed to have "="
*/


