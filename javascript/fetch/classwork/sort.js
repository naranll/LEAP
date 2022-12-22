let names = ["boldoo", "forjo", "tetsgee"];

let sortNames = names.sort((name) => {
    if(name[0] == "b") {
        return 10;
    } else {
        return -10;
    } 
});