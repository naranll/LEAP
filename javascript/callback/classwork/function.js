function doSth(func1, func2) {
    setTimeout(() => {
        if (now.getHours() < 9) {
            func1();
        } else {
            func2();
        }
    },200);
}

function printHi() {
    console.log("Hi");
}

function printBye() {
    console.log("Bye");
}

const now = new Date();

doSth(printHi, printBye);