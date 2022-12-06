function greet () {             //create function
    console.log('Hello');
}
greet ();
greet ();
greet ();

function greetWith(name){
    let i = 10;
    console.log('Hello' + name);
}

function namer(p1,p2 )
{   
    return p1*p2;
}  

let result = namer(8,9);
console.log(result);


//new style
let a = function (name) {
    return "hill" + name;
}


const b = (name) => { return "Helllo" + name};
// function is the same as => vector
// let b = 'function' but function will not change later so--- 
// write function as const b = 'function

