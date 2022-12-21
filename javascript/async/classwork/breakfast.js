function prepare_breakfast() {
    let coffee_promise = new Promise((resolve,reject) => resolve("coffee ready")); 
    //egg
    let egg_promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("egg fried");
        }, 2000);
    }); 
    //bread
    let bread_promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("bread toasted");
        },2000); 
    });
    //pack leftover
    let pack_promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("pack leftovers");
        },4000); 
    })
    let combined_promise = Promise.all([coffee_promise, egg_promise, bread_promise, pack_promise]);
    return combined_promise;
};

async function myBreakfast() {
    let result = await prepare_breakfast();
    console.log(result);
}

console.log("Good morning!");
myBreakfast();
console.log("Let's eat breakfast");



