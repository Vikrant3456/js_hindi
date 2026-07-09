//singleton pattern
//const tinderUser= new Object()   // singleton Object
const tinderUser={}                // non-singleton Object
tinderUser.id="123abc"
tinderUser.name="Vikrant"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"vikrant@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Vikrant",
            lastName:"Kumar"
        }
    }
}
//console.log(regularUser.fullName)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
//console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course={
    courseName:"JavaScript",
    price:999,
    courseInstructor: "Vikrant"
}

// course.courseInstructor

//const {courseInstructor: instructor}=course
console.log(instructor)

// {
//     "name"="vikrant",
//     "courseName"="js in hindi",
//     "price"="free"
// }