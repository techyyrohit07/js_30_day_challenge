// task 1

function mainFunc(){
    let course = "JS Challenge";
    return function innerFunc(){
        console.log(course);
    }
   
}

const returnedFunc = mainFunc()
returnedFunc()


// task 2

function privateCounter(){
    let count = 0

    return{
        increment(){
            count++
        }, 
        currentCount(){
            console.log(`Count: ${count}`);
        }
    }
}

const newCounter = privateCounter()
newCounter.increment()
newCounter.increment()
newCounter.currentCount()



// task 3

function uniqueIdGenerator(){
    let oldId = Math.floor(Math.random() * 100) + 1
    
    return function(){
        let newId = oldId++

        return newId
    }
}

const generateId = uniqueIdGenerator()

console.log(generateId());
console.log(generateId());
console.log(generateId());



// task 4

function user(name){

    return function greetUser(){
        console.log(`Hey, ${name}`)
    }
}

const newUser = user("Rohit")
newUser()



// task 5

function createFunction(n){
    let functionArray = []
    for(let i = 0; i < n; i++){
        functionArray.push((function(index){
            return function(){
            return index
            }
        })(i))
    }
    return functionArray
}

const newFunc = createFunction(6)

newFunc.forEach((func, index) =>{
    console.log(`Function ${index}`,func());
})



// task 6

let createModule = (function(){
    let items = []

    function itemCollection(){
        console.log(`Items in the list are: ${items} `);
    }


    return {
        add(item){
           items.push(item)
           itemCollection() 
        },

        remove(item){
            items = items.filter(list => list !== item)
            itemCollection()
        }, 

        list(){
            return items
        }
    }    
})()

createModule.add("apple")
createModule.add("banana")
createModule.add("orange")
createModule.remove("orange")
console.log(createModule.list());


// task 7

function memoize(fn){
    let cache = {}
    return function(...args){
        const key = JSON.stringify(args)
        if (cache[key]) {
            return cache[key]
        }else{
            const result = fn(...args)
            cache[key] = result
            return result
        }
    }
}


function add(a, b){
    return a+b
}

const newFunctionResult = memoize(add)
console.log(newFunctionResult(9,2));


// task 8

function factortial(n){
    if (n <=1) {
        return 1
    }else {
        return n * factortial(n - 1)
    }
}

const calcFactorial = memoize(factortial)

console.log(calcFactorial(5));
console.log(calcFactorial(6));
