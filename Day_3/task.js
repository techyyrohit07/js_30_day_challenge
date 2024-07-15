// Activity 1

// task 1
let num1 = 2
if(num1 > 0){
    console.log("Positive");
}else if(num1 < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}

// task 2

let age = 20
if(age >= 18){
    console.log("Eligible to vote");
} else{
    console.log("Not eligible");
}

// Activity 2

// task 3

let firstNum = 7
let secondNum = 10
let thirdNum = 9

if(firstNum > secondNum){
    if(firstNum > thirdNum){
        console.log("First no is the largest");
    }else{
        console.log("Third no is the largest");
    }
}else if(secondNum > thirdNum){
    console.log("Second no is the largest");
}else{
    console.log("Third no is the largest");
}


//  Activity 3

// task 4

let day = 4

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Enter days b/w 1-7");
        break;
}

// task 5

let score = 90

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("Grade : A");
        break;
    case (score >= 80 && score < 90):
        console.log("Grade : B");
        break;
    case (score >= 70 && score < 80):
        console.log("Grade : C");
        break;
    case (score >= 60 && score < 70):
        console.log("Grade : D");
        break;
    case (score >= 50 && score < 60):
        console.log("Grade : E");
        break;
    case (score >= 40 && score < 50):
        console.log("Grade : F");
        break;

    default:
        console.log("Enter valid marks");
        break;
}

// Activity 4

// task 6

let number = 4

let numType = (number % 2 == 0) ? "Even" : "Odd"
console.log(numType);


// Activity 5

// task 7

let year = 2028

if((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is a normal year`);
}