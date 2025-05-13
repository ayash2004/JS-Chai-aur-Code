const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// const pushArr = marvel_heros.push(dc_heros)// Push Considers DC Heros Array as a 4th Element and Returns the Length(4) in push Arr
// console.log(pushArr);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // Concat does not change Existing Arrays and returns a New Array 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread Operator 
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,[6, 7], 5]]]

const real_another_array = another_array.flat(1)  // Flat Creates a new array with all sub-array elements concatenated with Specified Depth 

const real_another_array1 = another_array.flat(Infinity) // Infinite Depth 
// console.log(real_another_array);
// console.log(real_another_array1);


// console.log(Array.isArray("Hitesh"))  //  "isArray" is a static method, determines whether the passed value is an Array
// console.log(Array.from("Hitesh"))   // "from" method creates a new, shallow-copied Array
// console.log(Array.from({name: "hitesh"})) // (interesting) Gives Empty Array because its not Specified if we want Key or Value

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));  //static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments

// console.log(Array.of("foo", 2, "bar", true));  // Expected Output: Array ["foo", 2, "bar", true]

// console.log(Array.of()); // Expected output: Array [] , Returns Empty Array