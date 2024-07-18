// Activity 1

// task 1

function odd_even_check(number){
    if(number % 2 == 0){
        console.log("The no. is even");
    }else{
        console.log("The no. is odd");
    }
}

odd_even_check(5)

// task 2

function calculate_square(num){
    return num * num
}

console.log(calculate_square(6));

// Activity 2

// task 3

let max_no = function(num1, num2){
    if(num1 > num2){
        console.log(`${num1} is the largest`);
    }else{
        console.log(`${num2} is the largest`);
    }
}  

max_no(7,9)

// task 4

const concat_strings = function(str1, str2){
    return str1 + str2
}

console.log(concat_strings("chai", " aur code"));

// Activity 3

// task 5

const sum_of_two_nos = (first_num, second_num) => {
    let sum  = first_num + second_num
    return sum
}

console.log(sum_of_two_nos(7,5));

// task 6

const char_check = (char) => {
    for(let i = 0; i <= char.length; i++){
        if(char[i] == "c"){
            return true
        }
    }
    
}

console.log(char_check("chai aur code"));

// Activity 4

// task 7

const paramaters = (param_1, param_2 = "4") => {
    return param_1 * param_2
}

console.log(paramaters(4));

// task 8

function user_info(name, age = "75"){
    return `Hello! ${name}, age = ${age} years`
}

console.log(user_info("Donald Trump"));

// Activity 5 Higher order function

// task 9

function higher_order(num, func){
    for(let i = 0; i < num; i++){
        func()
    }
}

function call_function(){
    console.log("Function called");
}

higher_order(5, call_function)

// task 10

function two_functions(func_1, func_2, value){
    const first_result = func_1(value)
    const final_result = func_2(first_result)
    return final_result
}

function add_two(num){
    return num + 2
}

function mult_by_3(num){
    return num * 3
}

console.log(two_functions(add_two, mult_by_3 , 5));