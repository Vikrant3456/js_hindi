const name="Vikrant"
const repoCount=34

console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("amazing")

// console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(4))
// console.log(gameName.indexOf('z'))

const newString=gameName.substring(0,4)
//console.log(newString)

const anotherString=gameName.slice(-5,3)
//console.log(anotherString)

const newStringOne="    Vikrant  "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url="https://www.vikrant%20.com"
console.log(url.replace("%20","-"))
console.log(url)
console.log(url.includes("vikrantc"))

const introduction="My name is Vikrant and I am a web developer. I love to code and I am passionate about learning new technologies."
const words=introduction.split(" ")
console.log(words[4])