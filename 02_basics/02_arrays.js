const marvel_heroes = ["thor", "ironman", "spiderman", "hulk"]
const dc_heroes = ["batman", "superman", "flash", "wonderwoman"]

// marvel_heroes.push(dc_heroes)
const all_heroes = marvel_heroes.concat(dc_heroes) // concat method
// console.log(all_heroes)
// console.log(all_heroes[4])

const all_new_heroes = [...marvel_heroes,...dc_heroes] // spread operator
//console.log(all_new_heroes)

const newArray=[1,2,3,[4,5,6],7,8,[2,3,4,[2,3,3,4]]]
const flateArray=newArray.flat(1) //flat method
//console.log(flateArray)

let score1=100
let score2=200
let score3=300
//console.log(Array.of(score1,score2,score3)) //Array.of method

console.log(Array.isArray("Vikrant"))
console.log(Array.from("Vikrant"))
console.log(Array.from({name: "Vikrant"}))