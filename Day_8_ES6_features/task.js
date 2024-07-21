// Activity 1

// task 1

let name = "Rohit"
let age = "21"

console.log(`Myself ${name} and I am ${age} years old`);

// task 2

console.log(
`This is a 
multi-line string using
template literals `
);

// Activity 2

// task 3

let arry_1 = [1, 2, 3, 4]
let [first_num, second_num] = arry_1
console.log(first_num,",", second_num);

// task 4

let bookInfo = {
    title : "The courage to be disliked", 
    author: "Ichiro Kishimi",
    year: "2013"
}

let{ title : book_name , author : writer} = bookInfo

console.log(book_name);
console.log(writer);


// Activity 3

// task 5

let arry_2 = [...arry_1, 5, 6, 7, 8]   //spread operator

console.log(arry_2);


// task 6

function sum(...args) {     //rest operator
    return args.reduce((sum, value) => sum + value, 0)
}

console.log(sum(2,5,9,8));


// Activity 4

// task 7

function productOfTwoNos( val1 , val2 = 1){
    return val1 * val2
}  

console.log(productOfTwoNos(8, 4));
console.log(productOfTwoNos(4));


// Activity 5

// task 8

function userInfo (name , age ){
    return {
        name, 
        age
    }

}

console.log(userInfo("Rohit", "25"));

// task 9 

let prop = "name"

let person = {
    [prop]: "Mason",
    age : 24
}

console.log(person);