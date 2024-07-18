//  Activity 1

// task 1

let newArary = [1, 2, 3, 4, 5]
console.log(newArary);

// task 2

console.log(newArary[0], newArary[newArary.length - 1]);

// Activity 2

// task 3

let animals = ["dog", "lion", "tiger", "horse"]

animals.push("Zebra")  //Adds element to the last 
console.log(animals);

// task 4

animals.pop() //removes last element
console.log(animals);

// task 5

animals.shift() //removes the first element
console.log(animals);

// task 6

animals.unshift("Hippo")  // Adds element to the first
console.log(animals);

// Activity 3

// task 7

let doubled_array = newArary.map( number => number * 2 )

console.log(doubled_array);

// task 8

let filtered_array = newArary.filter( number => number % 2 == 0 )

console.log(filtered_array);

// task 9

let array_sum = newArary.reduce( (sum, value) => sum + value , 0)
console.log(array_sum);

// Activity 4

// task 10

let array_new = [1, 2, "chai", "code", "git"]

for(i=0; i<array_new.length; i++){
    console.log(array_new[i]);
}

// task 11

array_new.forEach( e => {
    console.log(e);
});

// Activity 5

// task 12

let two_dim_matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
] 

console.log(two_dim_matrix);

// task 13

console.log(two_dim_matrix[0] [1]) 
console.log(two_dim_matrix[1] [2]) 
