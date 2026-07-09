
// let a= prompt('enter a number:')
// let b=prompt("enter a number:")
let a = 5; 
let b = "hi";

if(isNaN(a)|| isNaN(b)){
    throw SyntaxError('Sorry');
}
let c= parseInt(a)+parseInt(b)
try {
    console.log(c*x)
    
} catch (error) {
    console.error(error)
}
finally{
    console.log("done")//used in fn to execute after return
}