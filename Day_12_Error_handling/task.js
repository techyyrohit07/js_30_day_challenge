// task 1

function generateError() {
    try {
        throw new Error("This is an intentional error")
    } catch (error) {
        console.log(error.message);
    }
}

generateError()


// task 2

let divideNos = (a, b) => {
   try {
    if(a % b == 0){
        throw new Error("Denominator cant't be zero")
    }else{
        console.log("Value: ", a/b);
    }
   } catch (error) {
        console.log("Error: ",error.message);
   }
}

divideNos(2, 2)


// task 3

function toCheckFinally(){
    try {
        throw new Error("This is an error")
    } catch (error) {
        console.log("Error:", error.message);
    }finally{
        console.log("Finally is always run whether there is error thrown or not");
    }
}

toCheckFinally()


// task 4

class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = this.constructor.name
    }
}

function userError(){
    throw new CustomError("Caught a custom error")
}

function handleCustomError() {
    try {
        userError();
    } catch (error) {
        console.log(error.message);
    }
}

handleCustomError()



// task 5


let validateUserInput = (input) => {
    
    try {
        if(input == ""){
            throw new CustomError("Empty string")
        }else{
            console.log(input);
        }
    } catch (error) {
        console.log(error.message);
    }
}

validateUserInput("")


// task 6

let promiseReject = new Promise((resolve, reject) => {

    let randomCheck = Math.floor(Math.random() * 2)
    if (randomCheck == 0 ) {
        resolve("Promise resolved")
    }else{
        reject("There is an error in this function")
    }
    
})

promiseReject
.then( message => console.log(message))
.catch( error => console.log(error) )


// task 7

async function errorHandler(){
    try {
       let promise = await promiseReject
        console.log(promise);
    } catch (error) {
        console.log(error);
    }
}

errorHandler()



// task 8

let url = 'https://jsonplaceholders.typicode.com/posts'

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch( error => console.log(error.message))



// task 9

async function checkUrl(){
    try {
        const response = await fetch(url)
        
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error.message);
    }
    
}

checkUrl()

