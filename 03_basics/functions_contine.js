function calcuateCartPrice(num1){
    return num1
}
//console.log(calcuateCartPrice(200))

function calcuateCartPrice(...num1){          //Rest Operator used so we can pass Multiple Arguments
    return num1
}
// console.log(calcuateCartPrice(200, 400, 6000))       //Multiple Arguments

function calcuateCartPrice(val1, val2 , ...num1){
    console.log(val1);
    return num1

}
// console.log(calcuateCartPrice(2000, 4000, 6000, 8000));

const user ={
    username: "Yash",
    price: 499
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`)
}
// console.log(handleObject(user))
// handleObject(user)

handleObject({
    username: "Sam", 
    price: "999"
})

// const myArray= [200, 400, ,800, 600]
const myArray1= [200, 400, 800, 600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
console.log(`The Full Array is ${myArray1}`);
console.log("Second Value is", returnSecondValue(myArray1));
console.log("Second Value is", returnSecondValue([200, 400, 800, 600]));
