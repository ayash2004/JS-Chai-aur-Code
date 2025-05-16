// function myName(){
//     console.log("Y");
//     console.log("A");
//     console.log("S");
//     console.log("H");
// }
// myName()

// function add(number1, number2){
//     console.log(number1 + number2);
// }
// add(3, 4)

// function add1(number1, number2){
//     console.log(number1 + number2);
// }
// add1(3, "4")

// function add2(number1, number2){
//     console.log(number1 + number2);
// }
// add2(3, "a")

// function add3(number1, number2){
//     console.log(number1 + number2);
// }
// add3(3, null)

function sum(number1, number2){
    console.log(number1 + number2)
}
// sum(3,4)
// sum(3,"4")
// sum(3, "a")
// sum(3, null)

// function addtwonumbers(num1, num2){
//     console.log(num1 + num2);
// }
// const result = addtwonumbers(5, 6)
// console.log("Result:" , result)

// function addtwonumbers(num1, num2){
//     let result =num1 + num2;
//     return result
//     console.log("Yash") // Will not be Executed after above Return Statement
// }
// const result = addtwonumbers(5, 6)
// console.log("Result:" , result)

// function addtwonumbers(num1, num2){
//     return num1 + num2
// }    
// const result = addtwonumbers(5, 6) //Return stored in Variable 
// console.log(result);

// function loginusermessage(username){
//     return `${username} Just Logged In`
// }
// console.log(loginusermessage("Yash"))
// console.log(loginusermessage(""))
// console.log(loginusermessage())

// function loginusermessage(username){
//     if(username === undefined){
//         console.log("Please Enter a Username ");
//         return
//         // return
//     }
//     return `${username} Just Logged In`
// }

// console.log(loginusermessage());

// function loginusermessage(username){
//     if(!username ){
//         console.log("Please Enter a Username ");
//         return
//     }
//     return `${username} Just Logeed In`
// }
// console.log(loginusermessage())

function loginusermessage(username = "Sam"){          // Sam is Default Value, Sam is given to be safe if User has not Entered any Value
    if(!username ){
        console.log("Please Enter a Username ");
        return
    }
    return `${username} Just Logeed In`
}
console.log(loginusermessage("Yash"))    // If user has given a Value it will be Overwriten Automatically 