//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n

//console.log(typeof(bigNumber))

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros);

// https://262.ecma-international.org/5.1/#sec-11.4.3  Reference for How Typeof Works in JS



//Stack (Primitive) , Heap (Non-Primitive)

let myname = "Yash"
let altname = "Akash"

console.log(myname)
console.log(altname);

altname = "Batla"
console.log(myname)
console.log(altname);

let myobj ={
    name: "Yash",
    gender: "Male"
}

let altobj = myObj

altobj.name = "Ash"
console.log(myObj.name);
console.log(altobj.name);

/*
Stack == used For(Primitive Data Types)
Heap == used For(Non-Primitive / Reference Data Types)

Stack :
let email = "abcd@gmaildotocom"
let newEmail = email;
***here if changes made in newEmail it will not change the email because here in stack it creates COPY email*** 

Heap:
let userName = {
email = "abcd.com"
name = "abcd"

let anotherUser = userName;
***here if changes made in anotherUser.email then there is changes made in userName.email too****

*/