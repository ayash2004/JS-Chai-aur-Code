// Lexical Scoping (Inner Functions has Access to Variables (let and const) from Outer Functions)

// function outer(){
//     let username= "Yash"
//     function inner(){
//         console.log("Inner:",username)
//     }
//     inner()
// }
// outer()  
// console.log("TOO Outer:")

// Closures 
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();

// In the Above Example makeFunc() gets executed and stores value of const i.e Mozilla in Memory and returns displayName function in varibale myFunc

// We can Execute myFunc variable as Function because displayName was returned in it. Once we Execute myFunc() this time it runs displayName() function and logs name on the Console as name is already stored in the Memory from the previous Execution of makeFunc()

// If we comment the last line i.e myFunc() , u will notice it doesn't log on the Console 


