let singerIncome = 5_000_000;

let newComeback = new Promise((resolve, reject) => {
    if(singerIncome > 1_000_000) {
        resolve("New track");
    } else {
        reject("not enough fund so delayed");
    }
}, 2000);

//checking newComeback
console.log(newComeback);

//what to do with the promise
newComeback
    .then((res)=>{
        //if fulfilled
        console.log(res);
    })
    .catch((error)=>{
        //if rejected
        console.log(error);
    })
    .finally(()=>{
        //defealt action at the end of promise
        console.log("Finished");
    });

