const num = Math.PI
console.log(num)

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const yash = {
    username: "yash",
    email: "yash@FB.com",
    isAvailable: true, 
    orderChai: function(){
        console.log("Chai ban nhi skte")
    }
}

// console.log(Object.getOwnPropertyDescriptor(yash, "username"))

console.log(Object.getOwnPropertyDescriptors(yash, "username"))

Object.defineProperty(yash, 'username',{
    // writable: true,
    enumerable: true
})

// console.log(Object.getOwnPropertyDescriptor(yash, "username"))


for (let [key, value] of Object.entries(yash)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}

// console.log(Object.getOwnPropertyDescriptors(yash))