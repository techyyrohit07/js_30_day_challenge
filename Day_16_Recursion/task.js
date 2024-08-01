// task 1

function factorial(n){
    if(n == 0){
        return 1
    } else{
        return n * factorial(n - 1)
    }
}

console.log(factorial(6));
console.log(factorial(5));


// task 2

let recursiveFibonacci = (n) => {
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)

}

console.log(recursiveFibonacci(10));
console.log(recursiveFibonacci(6));


// task 3

let array = [6, 5, 3, 7, 9]

function sumOfArray(arr){
    
    if(arr.length == 0){
        return 0
    }

    return arr[0] + sumOfArray(arr.slice(1))

}
console.log(sumOfArray(array));


// task 4

let newArr = [4, 6, 8, 10, 2, 7]

function findMaximum(arr){
    if (arr.length == 1) {
        return arr[0]
    }

    return arr[0] > findMaximum(arr.slice(1)) ? arr[0] : findMaximum(arr.slice(1))
}


console.log(findMaximum(newArr));


// task 5

function reverseString(str){


    if(str.length == 1 || str.length == 0){
        return str
    }

    return str[str.length - 1] + reverseString(str.slice(0,-1))
}

let names = "Rohit"

console.log(reverseString(names));


// task 6


function palindromeCheck(str){
    if(str.length <= 1){
        return true
    }

    if(str[0] === str[str.length - 1]){
        return palindromeCheck(str.slice(1,-1))
    }

    return false
}

console.log(palindromeCheck("rotor"));
console.log(palindromeCheck("kitkat"));


// task 7


function recursiveSearch(arr, target){
    return search(arr, target, 0 , arr.length - 1)
}


function search(arr, target, leftIndex, rightIndex) {
    if(arr.length == 0){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex)/2 )
    
    if (target == arr[middleIndex]) {
        return middleIndex
    }else if(target < arr[middleIndex]) {
        return search(arr, target, leftIndex, middleIndex - 1)
    }else if(target > arr[middleIndex]){
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveSearch([1, 5, 6, 8, 10, 11],5 ));
console.log(recursiveSearch([1, 2, 4, 9, 12, 13],13 ));


// task 8


function countTargetElement(arr, target, index = 0){
    
    if (index >= arr.length) {
        return 0 
    } 

    if(arr[index] == target){
        return 1 + countTargetElement(arr, target, index + 1)
    }else{
        return countTargetElement(arr, target, index + 1)
    }

}

let count = countTargetElement([1, 2, 4, 5, 6, 2, 7,2, 9 ,2], 2)

console.log(`The count is: ${count}`);





