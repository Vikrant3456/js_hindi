//for of loop

const arr=[1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// const greetings="hello world!"
// for (const greet of greetings) {
//     console.log(greet)
// }

//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map)
// for (const [key,val] of map) {
//     console.log(key,':-',val)
// }

const myObject={
    game1:'NFS',
    game2: 'Spiderman'
}

for (const [key,val] of myObject) {
    console.log(key,':-',val)
}
