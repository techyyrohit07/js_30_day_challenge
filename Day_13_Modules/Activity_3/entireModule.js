// task 5

const newNum = 20

const newFunc = (name) => {
    console.log(`Hey ${name}, how are you?`);
}

let str = (value) => {
    for(let i = 0; i <= value.length; i++){
        console.log(value[i]);
    }   
}

export {newNum, newFunc, str}