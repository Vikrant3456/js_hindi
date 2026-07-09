//Immediate Invoked Function Expressions (IIFE)
//immediate function execution and saving from global pollution
(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)
})('Vikrant')