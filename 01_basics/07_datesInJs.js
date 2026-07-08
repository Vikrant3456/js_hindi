let myDate=new Date()
// console.log(myDate.toString()) // Thu Jun 06 2024 12:34:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // Thu Jun 06 2024
// console.log(myDate.toISOString())  // 2024-06-06T12:34:56.789Z
// console.log(myDate.toLocaleString()) // 6/6/2024, 12:34:56 PM (format may vary based on locale)
// console.log(typeof myDate) // object

// let myCreatedDate=new Date(2023,0,23,17,30,1) 
let myCreatedDate=new Date("01-15-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(Math.floor(myTimeStamp)/1000)
// console.log(myCreatedDate.getTime())
console.log(myCreatedDate.getMonth()+1)
console.log(myCreatedDate.getDay())
console.log(myCreatedDate.getFullYear())