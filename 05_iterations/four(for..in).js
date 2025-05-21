// for (const key in object) {
    
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
    // console.log(key);
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);          //Map is not Iterable with for..in Loop
// }

for (const [key, value] of map) {
    // console.log(key);
    // console.log(value);           // Works with for..of Loop
    
}