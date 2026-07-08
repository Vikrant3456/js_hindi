"use strict"; // use all JS code as newer version

//alert(3+3) -> bcoz we are using node js not browser

let name="Vikrant"
let age=22
let isLoggedIn=false
let state=null //null
let state2; //undefined

//number range in js is -2^53 to 2^53
//bigint is used to store number greater than 2^53
//range of bigint is -2^63 to 2^63
//string=""
//boolean=true/false
//null=empty value->stand alone value
//undefined=variable is declared but not assigned any value
//symbol=unique value
//object

console.log(typeof undefined) //undefined
console.log(typeof null) //object
console.log(typeof 123) //number
console.log(typeof 123n) //bigint
console.log(typeof "Vikrant") //string
console.log(typeof true) //boolean
console.log(typeof Symbol("id")) //symbol
console.log(typeof {name:"Vikrant",age:22}) //object
