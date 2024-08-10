// task 1  Two sum 

function TwoSum(nums, target){
    const map = new Map()

    for(let i= 0 ; i < nums.length; i++){
        const pairTarget = target - nums[i]
        if(map.has(pairTarget)) return [map.get(pairTarget), i]

        map.set(nums[i], i)
    }   

}


console.log(TwoSum([2,7,11,15], 9));
console.log(TwoSum([3,7,8,5,9],14 ));



// task 2  Reverse Integer

function reverseInteger(int){
    const isNegative = int < 0
    
    let reversed = parseInt(Math.abs(int).toString().split('').reverse().join(''))

    if(reversed > Math.pow(2, 31) - 1){
        return 0
    }

    return isNegative ? -reversed : reversed

}

console.log(reverseInteger(571));
console.log(reverseInteger(420));
console.log(reverseInteger(-215));



// task 3 Palindrome Number

function palindromeCheck(num){
   if(num < 0 || (num % 10 === 0 && num !== 0)){
        return false
   }

   let reversed = 0 
   let original = num

   while(num > 0 ){
    let lastDigit = num % 10
    reversed = reversed * 10 + lastDigit
    num = Math.floor(num / 10) 
   }

   return original === reversed
}

console.log(palindromeCheck(45654));
console.log(palindromeCheck(-24542));
console.log(palindromeCheck(245426));


// task 4  Merge two sorted lists

class ListNode{
    constructor(val, next = null){
        this.val = val
        this.next = next
    }
}

function mergeTwoLists(list1, list2){
    let dummy = new ListNode(0)
    let current = dummy

    while(list1 !== null && list2 !== null){

        if(list1.val <= list2.val){
            current.next = list1
            list1 = list1.next
        }
        else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if(list1 !== null){
        current.next = list1
    }else if(list2 !== null){
        current.next = list2
    }

    return dummy.next
}
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)))

let list2 = new ListNode(1, new ListNode(3 , new ListNode(4)))

let mergedList = mergeTwoLists(list1, list2)
while(mergedList !== null){
    console.log(mergedList.val);
    mergedList = mergedList.next    
}


// task 5  Valid Parentheses 

function isValid(s){
    const stack = []
    const map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }

    for(let i = 0; i < s.length ; i++){
        let char = s[i]

        if(map[char]){
            stack.push(map[char])
        }else{

            if(stack.pop() !== char){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValid('()'));
console.log(isValid('[()]'));
console.log(isValid('{}['));

