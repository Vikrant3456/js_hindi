//var c=300  -> it doesnt care about the scope
let a=300
if(true){
    let a=10
    const b=20
    //console.log("INNER A: ",a)
}

//console.log(a)
// console.log(b)
//onsole.log(c)

function one(){
    const username="Vikrant"

    function two(){
        const website="Youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}
//one()

if(true){
    const username="Vikrant"
    if(username==="Vikrant"){
        const website = " youtube"
        //console.log(username+website);
    }
    //console.log(website)
}
//console.log(username)


// ******************interesting********************

console.log(addone(5))
function addone(num){
    return num+1
}

//addone(5)
//console.log(addTwo(5))
const addTwo=function(num){
    return num+2
}

addTwo(5)