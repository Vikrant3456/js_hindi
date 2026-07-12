// let myName = 'Vikrant     '
// let myChannel = 'chai   '

// console.log(myName.length)

let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

// Object.prototype.vikrant = function(){
//     console.log("vikrant is present in all objects")
// }

// Array.prototype.heyVikrant = function(){
//     console.log(`Vikrant says Heyyy`)
// }
//heroPower.heyVikrant()
// myHeroes.heyVikrant()

// inheritance


const User={
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher) 

let anotherUsername = 'ChaiAurCode    '

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)

}

anotherUsername.trueLength()
"vikrant     ".trueLength()
