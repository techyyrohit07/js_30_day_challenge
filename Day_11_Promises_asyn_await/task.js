// // task 1

// let promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise resolved after 2 seconds");
//         resolve()
//     },2000)
// })

// promiseOne.then(() => {
//     console.log("Promise consumed");
// })

// // task 2

// const promiseError = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         reject("Error occured")
//     }, 3000)
    
// })

// promiseError.catch((err) => {
//     console.log(err);
// })


// // task 3

// let url = 'https://api.github.com/users/techyyrohit07'

// let fetchData = new Promise((resolve, reject) => {
//     let response = fetch(url)
//     if(response) resolve(response)
//     else reject('Cannot fetch data from URL')
// })

// fetchData.then((data) => {
//     return data.json()
// }).then((data) => {
//     console.log(data.login);
// }).catch((err) => console.log(err))


// // task 4

// function delay (ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms)
//     })
// } 

// async function checkDelay(){
//     console.log("Start task 1");
//     await delay(1000)
//     console.log("Task 1 end");
// }
// checkDelay()


// // task 5

// const resolvePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = true
//         if(!error) resolve({username: "Rohit", password : '1234'})
//         else reject('Something wrong')
//     }, 1000);
// })

// async function checkResolvePromise(){
//     try {
//       let response = await resolvePromise
//       console.log(response);  
//     } catch (error) {
//         console.log(error);
//     }
// }

// checkResolvePromise()

// // task 6

// let url2 = 'https://api.github.com/users/techyyrohit07'

// let fetchData2 = new Promise((resolve, reject) => {
//     let response = fetch(url2)
//     if(response) resolve(response)
//     else reject('Cannot fetch data from URL')
// })

// fetchData2.then((data) => {
//     return data.json()
// }).then((data) => {
//     console.log(data.login);
// }).catch((err) => console.log(err))


// // task 7

// async function handleData(){
//     try {
//         let response = await fetch(url2)
//         let data = await response.json()
//         console.log("username: ",data.login);

//     } catch (error) {
//         console.log(error);
//     }
// }
// handleData()


// task 8

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let value = true
        if(value) resolve("First promise resolved")
        else reject("Unable to complete promise1")
    }, 1000);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let value = true
        if(value) resolve("Second promise resolved")
        else reject("Unable to complete promise2")
    }, 2000);
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let value = true
        if(value) resolve("Third promise resolved")
        else reject("Unable to complete promise3")
    }, 1000);
})

Promise.all([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})


// task 9

Promise.race([promise1, promise2, promise3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})

