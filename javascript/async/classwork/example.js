async function fryEgg() {
    return 19;
}

console.log(fryEgg());
let result = fryEgg();

//whatever fryEgg() returns will come int 'res' parametre
result.then((res)=>{
    console.log(res);
})