// function romanToInt(s) {
//     let symbols = ['IVXLCDM']; 
//     let results = "";
//     for(let j = 0; j < s.length; j++) {
//         for(let i = 0; i < symbols.length; i++) {
//             if(s[j] == symbols[i]) {
//                 results = "yess";
//             } 
//         }
//     }
//     return results;
// };

function romanToInt(s) {
    let results = 0;
    for(let i = 0; i<s.length; i++){
        switch(s[i]){
            case 'I': results = results + 1;
            break;
            case 'V': results = results + 5;
            break;
            case 'X': results = results + 10;
            break;
            case 'L': results = results + 50;
            break;
            case 'C': results = results + 100;
            break;
            case 'D': results = results + 500;
            break;
            case 'M': results = results + 1000;
            break;
        }
    }
    return results;
};

let into = "XVIII";
console.log(romanToInt(into)); 