// Activity 1

let num1 = 8
let num2 = 3

console.log("Sum:", num1+num2);
console.log("Difference:", num1-num2);
console.log("Multiplication:", num1*num2);
console.log("Division:", num1/num2);
console.log("Remainder:", num1%num2);

// Activity 2

num1+= 2
num2 -= 1
console.log("num1 becomes:", num1);
console.log("num2 becomes:", num2);

// Activity 3

console.log(`${num1} is greater than ${num2}`, num1>num2);
console.log(`${num1} is less than ${num2}`, num1<num2);
console.log(`${num1} is greater than or equal to ${num2}`, num1>=num2);
console.log(`${num1} is less than or equal to ${num2}`, num1<+num2);
console.log(`Is ${num1} == ${num2}`, num1 == num2);
console.log(`Is ${num1} === ${num2}`, num1 === num2);

// Activity 4

console.log(num1, num2);
if(num1 == 10 && num2>= 2){
    console.log("Both conditions true")
}

if(num1>=4 || num2<=2){
    console.log("One of the comditions is true");
}

if(num1 != 11){
    console.log("True");
}


// Activity 5

let firstNum = 2

let isPositive = (firstNum > 0) ? "Positive" : "Negative"
console.log(isPositive);