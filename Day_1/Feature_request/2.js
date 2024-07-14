let favAthlete = 'Usain Bolt'
console.log('My favourite athlete is', favAthlete);

favAthlete = 'Neeraj Chopra'
console.log('My favourite athlete changed to',favAthlete);


const myConstant = "Constant value"
console.log("Initial:", myConstant);

try{
    myConstant = "Changed value"  //it will give error as const cannot be changed 
} catch(error){
    console.log("Error on reassignment:", error.message);    //prints the error message
}
