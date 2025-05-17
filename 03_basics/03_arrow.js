const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // Output: {}

// In Inspect Element console.log() gived Window Object as Output


// function chai(){
//     let username = "hitesh"
//     console.log(this);   // When Run in Node Environment Inside Function Gives alot of Values 
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // Gives Undefined as Output
// }
// chai ()

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);  // Undefined 
// }
// chai()

const chai =  () => {
    let username = "hitesh"
    console.log(this);  // {} 
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2                             // Basic Arrow Function  
// }

// const addTwo = (num1, num2) =>  num1 + num2        // Implicit Return

// const addTwo = (num1, num2) => ( num1 + num2 )     // Explicit 

// const addTwo = (num1, num2) => {username: "hitesh"}   // Undefined Cause WE need to Rap the Object in Parenthesis 
const addTwo = (num1, num2) => ({username: "hitesh"})

// console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()