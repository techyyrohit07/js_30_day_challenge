// task 1

let title = document.getElementById('title')


title.innerText = "This is a JS challege by Hitesh Sir."


// task 2

let element = document.querySelector('.changeColor')
element.style.backgroundColor = "orange"


// task 3

let newDiv = document.createElement('div')
newDiv.innerHTML = "This is the task 3, adding a div element to the body"
newDiv.style.fontSize = "20px"

document.body.appendChild(newDiv)


// task 4

let newList = document.createElement('li')
newList.innerText = "Fourth list added to the ul element"

let list = document.getElementById("myList")
list.appendChild(newList)

// task 5

let removeElement = document.querySelector('p')

removeElement.remove()


// task 6

if(list.lastElementChild){
    list.removeChild(list.lastElementChild)
}


// task 7

let image = document.querySelector('img')
image.setAttribute('src', './images/pexels-ruxandra-scutelnic-1470184397-26997896.jpg')


// task 8

let addClass = document.getElementById('paragraph')
addClass.classList.add('addClass')

setTimeout( () => {
    addClass.classList.remove('addClass')
}, 3000)


// task 9

let changeContent = document.getElementById('changeContent')
let button = document.getElementById('button')
button.addEventListener('click', () =>{
    changeContent.innerText = "This content was changed by clicking on the button."
} )


// task 10

changeContent.addEventListener('mouseover', () => {
    changeContent.style.borderColor = 'cyan'
})


changeContent.addEventListener('mouseout', () => {
    changeContent.style.borderColor = 'red'
})