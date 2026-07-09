function sayMyName(){
    console.log("V")
    console.log("i")
    console.log("k")
    console.log("r")
    console.log("a")
    console.log("m")
}

//sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }

function addTwoNumbers(number1,number2){
    // let result=number1+number2;
    // console.log("Vikrant")
    // return result;
    return number1 + number2
}

const res=addTwoNumbers(9,null)
// console.log("Result: ", res)

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Vikrant"))
//console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){   //... is rest and spread operator
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user={
    username: "Vikrant",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)
handleObject({
    username: "sam",
    price:399
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200,1,400,100,600]))