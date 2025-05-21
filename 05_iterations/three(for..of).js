// for of
// for (const element of object) {
    
// }


// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == " "){
        // console.log("Space Detected");
        continue;
    }
    // console.log(`Each char is ${greet}`)
}

//Maps

const  map = new Map()

map.set("IN","India")
map.set("USA","Unites States of America")
map.set("FR", "France")
map.set("Fr", "France")
 
// console.log(map);

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    
       // Object is not Ierable with for..of Loop

