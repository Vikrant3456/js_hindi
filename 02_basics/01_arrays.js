const myArray=[0,1,2,3,4,5,6,7,8,9,true,"Vikrant"]
const myHeroes=["Ironman","Spiderman","Batman"]
const myArray2=new Array(2,3,4,1,2,3)

// console.log(myArray)
// console.log(myHeroes)
// console.log(myArray2)
// console.log(myArray2[4])
myArray.push(43)
myArray.pop()
myArray.unshift(99)
myArray.shift()
myArray.shift()
// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray.indexOf(4))
// console.log(myArray.includes(4))
const newArray=myArray.join()
// console.log(myArray)
// console.log(newArray)
// console.log(typeof newArray)

const myn1=myArray.slice(1,4)
console.log(myn1)
const myn2=myArray.splice(1,4)
console.log(myn2)

// slice doesn't change the original array but splice does change the original array