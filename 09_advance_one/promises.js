// Do an async task
// const promiseOne = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     }, 2000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");    
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 2000)
// }).then (function(){
//     console.log("ASync 2 Resolved ")
// })

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Yash", email:"yash@example.com"})
    }, 5000)
})

promiseThree.then(function(user){
    // console.log(user)
})

// const promiseFour = new Promise (function(resolve, reject){
//     setTimeout(function () {
//         let error = true;
//         // let error = false;
//         if(!error){
//             resolve({username: "Agarwal", password: "123"})
//         }
//         else {
//             reject("Error: Something Went Wrong")
//         }
//     }, 5000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     console.log(user.username);
//     return user.username
// }).then((username) =>{
//     console.log(username)
// }).catch((error)=> {
//     console.log(error)
// }).finally(function(){
//     console.log("Promise Complete ")
//     // .finally(() => console.log("Promise Complete"))
// })


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;    
        // let error = false;
        if(!error){
            resolve({username: "Javascript", password: "456"})
        }
        else {
            reject("Error: Javascript Went Wrong")
        }
    }, 2000);
})

// promiseFive.then((user)=> {
//     console.log(user);
    
// })

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);    
// }

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
        // console.log("Caught Error ")
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     console.log("YAS")
//     // console.log(response.json())
//     return response.json()
// })
// // console.log(response)
// .then((data)=> {
//     console.log(data)
// })
