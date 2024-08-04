// task 1

let newString = "Javascript is a very popular web development language, javascript was launched in 1995 by Brendan Eich. Javascript , javascript"

const regex = /javascript/gi
console.log(newString.match(regex));


// task 2

let digits = "digits0digits10875"
console.log(digits.match(/\d/g));



// task 3

let capitalStr = "This is the regex to check All the Words starting with a Capital letter"

console.log(capitalStr.match(/\b[A-Z][a-z]*\b/g));


// task 4

let digitSequence = "one1234two456"

console.log(digitSequence.match(/\d+/g));



// task 5

let phoneNo = "(123) 456-7890"

console.log(phoneNo.match(/^\(\d{3}\) \d{3}-\d{4}$/));



// task 6

let email = "rohitchai@gmail.com"

let match = email.match(/^([a-zA-Z0-9.]+)@([a-zA-z0-9.-]+\.[a-zA-Z]{2,})$/)

if(match){
    let username = match[1]
    let domain = match[2]

    console.log(`Username: ${username} `);
    console.log(`Domain: ${domain}`);
    
}else{
    console.log("No matches");
    
}


// task 7

let firstWord = "Hello World"

console.log(firstWord.match(/^Hello/));


// task 8

console.log(firstWord.match(/World$/));


// task 9


function validatePassword(password){
    const passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$^&^*])[a-zA-Z0-9!@#$%^&*]{8,}$/
    return passRegex.test(password)
}

console.log(validatePassword("huy7*wWaa"));



// task 10


function checkURL(url){
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/
    return urlRegex.test(url)
}

console.log(checkURL("https://google.com"));
console.log(checkURL("http://chaicode.com"));
