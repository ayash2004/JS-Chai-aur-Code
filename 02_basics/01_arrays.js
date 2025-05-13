// array

const myHeroes = ["shaktiman", "naagraj"]

// console.log(myArr)
// console.log(myHeroes);

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

const myArr = [0, 1, 2, 3, 4,5, 9]
const myArr1 = [0, 1, 2, 3, 4, 9]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()    ///    Concatinates and changes the type to String 
const newArr2 = myArr.join(';')
// console.log( myArr);
// console.log( typeof myArr);
// console.log( newArr);
// console.log(typeof newArr);
// console.log( newArr2);


// slice, splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)   //  Slice does not Include the End Element which is 3rd Element 

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 4)    // Splice Removes the Elements from the Original Array
// console.log("Splice Removes the Elements from the Original Array: C ", myArr);
// console.log(myn2);
const myn3 = myArr1.splice(1, 4, 10, 11)
