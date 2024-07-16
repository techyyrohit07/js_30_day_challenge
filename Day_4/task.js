// Activity 1

// task 1

for (i = 1; i<=10; i++){
    console.log(i);
}

// task 2

for (i=1; i<=10; i++){
    console.log(`5 * ${i} = ${5 * i} `);
}

// Activity 2

// task 3

let number = 1
let sum = 0
while (number <= 10) {
    sum += number 
    number++
}
console.log("Sum of no.s from 1 to 10 is:",sum);

// task 4

let num = 10

while (num >= 1){
    console.log(num);
    num--
}
console.log("\n");

// Activity 3

// task 5

let num1 = 1
do {
    console.log(num1);
    num1++
} while (num1 <=5);

// task 6

let num2 = 5
let factorial = 1

let new_num = num2
do {
    factorial *= new_num
    new_num--
    if(num2 == 0){
        factorial = 1
    }
} while (new_num > 0);
console.log(factorial);


// Activity 4

// task 7

let n = 6   // no. of rows 
for (i = 1; i < n; i++){
    let pattern = ''
    for (j = 1; j <= i ; j++){
        pattern += "*"
    }
    console.log(pattern);
}

// Activity 5

// task 8

for(i = 1; i<=10; i++){
    if(i == 5){             // skips 5
        continue
    }
    console.log(i);
}

// task 9

for (i = 1; i<=10; i++ ){
    console.log(i);
    if (i == 7) {
        break
    }
}


