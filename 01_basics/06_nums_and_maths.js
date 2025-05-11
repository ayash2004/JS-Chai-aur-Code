// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(Number.MAX_SAFE_INTEGER)
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

// const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// const number = 24545.4554
// console.log(number.toExponential(3))
// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); // Random Value between 0 and 1
// console.log((Math.random()*10) + 1);  //To Avoid the possibility if Random gives 0.02,0.03 Values
// console.log(Math.floor(Math.random()*10) + 1); // To Make Sure the minimum Value is 1 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Formula for Random Value between 10 and 20