const user={
    username: "Vikrant",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this)

/*function chai(){
    let username="Vikrant"
    console.log(this.username)
}*/

/*const chai=function(){
    let username="Vikrant"
    console.log(this.username)
}*/

/*const chai= () =>{
    let username="Vikrant"
    console.log(this)
}*/

//chai()

/*const addTwo=(num1,num2)=>{
    return num1+num2
}*/

//const addTwo=(num1,num2)=>(num1+num2) //implicit function
const addTwo=(num1,num2)=>({username: "vikrant"})
console.log(addTwo(3,4))
