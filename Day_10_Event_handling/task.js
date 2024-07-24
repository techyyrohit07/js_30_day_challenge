// task 1

let paragraph = document.getElementById('paragraph')

let button = document.getElementById('button')

button.addEventListener('click', () => {
    paragraph.innerText = "You changed the paragraph content by clicking on the button"
})

// task 2

let image = document.querySelector('img')

image.addEventListener('dblclick', () => {
    image.classList.toggle('toggle')
})


// task 3

button.addEventListener('mouseover', () =>{
    button.style.backgroundColor = "orange"
})


// task 4

button.addEventListener('mouseout', () => {
    button.style.backgroundColor = 'green'
})


// task 5

let myInput = document.getElementById('myInput')

myInput.addEventListener('keydown', (e) => {
    console.log("Key pressed:", e.key);
} )


// task 6
let newParagraph = document.getElementById('newParagraph')


myInput.addEventListener('keyup', (e) => {
   
    newParagraph.innerText = myInput.value

})


// task 7

let myForm = document.getElementById('myForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const name = document.getElementById('name')
    console.log(`Name: ${name.value}`);
    const email = document.getElementById('email').value
    console.log("Email: ",email );
})


// task 8

let selectOption = document.getElementById('options')

let addPara = document.getElementById('addPara')

selectOption.addEventListener('change', (e) => {
  
    addPara.innerText = e.target.value
})


// task 9

let list = document.getElementById('list')

list.addEventListener("click", (e) => {

    if(e.target && e.target.nodeName == 'LI'){
        console.log(`You clicked on ${e.target.innerText}`);
    }
} )


// task 10

let itemList = document.getElementById('itemList')
let addItem = document.getElementById('addItem')

itemList.addEventListener('click', (e) => {
    if(e.target && e.target.nodeName == 'LI'){
        alert(`You clicked on ${e.target.innerText}`)
    }
})

let itemCount = 2
addItem.addEventListener('click', () => {

    itemCount++
    let newItem = document.createElement('li')
    newItem.innerText = `List${itemCount}`
    itemList.appendChild(newItem)
})