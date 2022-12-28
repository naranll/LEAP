//object blueprint
// class Students {
//     name;
//     age;
//     gender;
// }

class Students {
    constructor(inName, inAge, inGender) {
        this.name = inName;
        this.age = inAge;
        this.gender = inGender;
    }
    //creates field but doesn't show
    //I can also declare initial value for keys, for example:
    //age = 10;    in case incoming data missed an age value
    name;
    age;
    //gender will be automatically added
}

let studentJohn = new Students("John", 15, "Male");
let studentMary = new Students("Mary", 14);

console.log(studentJohn);
console.log(studentMary);

console.log("====================")

class Animals{
    constructor(classes, types, environment) {
        this.class = classes;
        this.type = types;
        this.environment = environment;
    }
}

class Dog extends Animals{
    constructor(classes, types, environment, inbreed, inAge){
        super(classes, types, environment)
        this.breed = inbreed;
        this.age = inAge;
    }
    
}

class Special extends Dog{
    constructor(classes, types, environment, inbreed, inAge, inName){
        super(classes, types, environment,  inbreed, inAge, )
        this.name = inName;
    }
}

let myDog1 = new Dog("mammals", "dog", "dryland","husky", 3, "Lory");
let myDog = new Special("mammals", "dog", "dryland","husky", 3, "Lory");
console.log(myDog1);
console.log(myDog);

