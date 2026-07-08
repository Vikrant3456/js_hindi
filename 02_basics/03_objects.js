// Object Literals

const mySym=Symbol("key1")

const JSuser = {
    name: "Vikrant",
    "full name": "Vikrant Kumar",
    [mySym]: "myKey1",
    age: 25,
    city: "Bangalore",
    email: "vikrant@gmail.com",
    isLoggedIn: false
}
// console.log(JSuser["name"])
// console.log(JSuser["age"])
// console.log(JSuser["full name"])
// console.log(JSuser[mySym])
// console.log(typeof mySym)

JSuser.email="vikrant2@gmail.com"
//Object.freeze(JSuser)
JSuser.email="vikrant3@gmail.com"
// console.log(JSuser)

JSuser.greeting = function(){
    console.log("Hello JSuser")
}

JSuser.greeting2 = function(){
    console.log(`Hello JSuser , ${this.name}`)
}

//console.log(JSuser)
console.log(JSuser.greeting())
console.log(JSuser.greeting2())