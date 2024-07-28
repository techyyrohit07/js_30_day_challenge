let sum = (a,b) =>{
    return a+b
} 

let multiply = (a,b) =>{
    return a*b
} 

function checkEven(num){
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    }
}

export {sum, multiply, checkEven}