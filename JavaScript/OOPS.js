// let obj={
//     a: 1,
//     b: "Akash"
// }
// console.log(obj)

// let animal={
//     eats: true
// };

// let rabbit={
//     jumps: true
// };

// rabbit.__proto__=animal;  // sets rabbit.[[Prototype]]  a type of [INHERITANCE]

class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is created")
    }

    eats(){
        console.log("kha rha hoon")
    }

    jumps(){
        console.log("kood rha hu")
    }
}

let a=new Animal("panda")
console.log(a)

class Lion extends Animal{
    constructor(name){
        super(name)
        this.name=name
        console.log("Object is created & he is a Lion")
    }

    roar(){
        console.log("lion Dahad rha h")
    }

    run(){
        console.log("lion bhaag rha h")
    }
}

let l=new Lion("shera")
console.log(l)