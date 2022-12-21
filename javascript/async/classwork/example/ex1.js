/*
async function makeLunch() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("done"), 1000)
    })
    let result = await promise;
    console.log(result);
}

console.log("a");
console.log("b");
makeLunch();
console.log("last");
*/


async function makeLunch() {
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("done"), 1000)
    })
    return promise;
}

console.log("a");
console.log("b");
makeLunch();
console.log("last");


