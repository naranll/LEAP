let timer = document.getElementById("root");

/*
const myInterval = setInterval(function () {
    for(let min = 0; min < 60; min++) {
        for(let sec = 0; sec < 60; sec++) {
            timer.innerText = `${min} : ${sec}`;
        }
    }
    // clearInterval(myInterval);
}, 1000);
*/


let sec = 0;
let min = 0;
let hour = 0;
setInterval(function(){
    sec++;
    if(sec == 60) {
        sec=0;
        min++;
        if(min == 60) {
            min = 0;
            hour++;
        }
    }
    // timer.innerText = `${hour < 10 ? "0" : ""}:${min < 10 ? "0" : ""}:${sec}`;
    timer.innerText = `${hour}:${min}:${sec}`;
},100)

