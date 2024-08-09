// task 1

localStorage.setItem('name', 'Rohit')

let name = localStorage.getItem('name')
console.log(name);

// task 2

const user = {name : 'Rohit', age: 22}

localStorage.setItem('sessionUser', JSON.stringify(user))

let storedUser = JSON.parse(localStorage.getItem('sessionUser'))
console.log(storedUser.name);


// task 3 Local storage

let form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    
})

let display = () => {
    let name = localStorage.getItem('name')
    let email = localStorage.getItem('email')
    let paragraph = document.getElementById('paragraph')
    if(name && email){
        paragraph.innerHTML = `Name: ${name} Email: ${email}`
    }else{
        setTimeout(()=>{
            paragraph.innerHTML = "Nothing to display"
        },2000)
        
    }
}   
display()



// task 4

localStorage.setItem('age', '22')
let age = localStorage.getItem('age')
console.log("Age: ",age);

localStorage.removeItem('age')
let removedAge = localStorage.getItem('age')
console.log("Age: ", removedAge);


// task 5

sessionStorage.setItem('channel', 'chaiaurcode')
let channelName = sessionStorage.getItem('channel')
console.log(channelName);


// task 6

let student = {course: 'JSchallenge', amount: 'free'}

sessionStorage.setItem('studentDetails', JSON.stringify(student))

let storedStudent = JSON.parse(sessionStorage.getItem('studentDetails'))
console.log(storedStudent.amount);
console.log(storedStudent.course);


// task 7 Session storage

let sessionForm = document.getElementById('newForm')

sessionForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    let firstName = document.getElementById('firstName').value
    let newEmail = document.getElementById('newEmail').value
    sessionStorage.setItem('firstname', firstName)
    sessionStorage.setItem('email', newEmail)

})

function displaySessionData(){
    let firstName = sessionStorage.getItem('firstname')
    let newEmail = sessionStorage.getItem('email')

    let newPara = document.getElementById('newPara')
    if(firstName && newEmail){
        newPara.innerHTML = `First Name: ${firstName} Email: ${newEmail}`
    }else{
        newPara.innerHTML = 'Nothing here'
    }
}

displaySessionData()


// task 8

console.log('ChannelName:', channelName);

let removedChannel = sessionStorage.removeItem('channel')
console.log('Removed channel:', removedChannel);



// task 9

let userDetails = (name, age) => {
    sessionStorage.setItem(name, age)
    localStorage.setItem(name,age)

    console.log('Session data:', sessionStorage.getItem(name));
    console.log('Local data:', localStorage.getItem(name));
    
}

userDetails('chris', '40')



// task 10

function clearData(){
    localStorage.clear()
    sessionStorage.clear()
}

clearData()