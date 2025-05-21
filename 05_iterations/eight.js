const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0) //3)           

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// })        //Intialize Value not specified so first Element of Array is considered as the Intial Value                            

// const myTotal = myNums.reduce( (acc, curval) => acc + curval)
// console.log("Total is", myTotal)

let shoopingCart = [
    {
        itemName: "JS Course",
        price: 999
    },
    {
        itemName: "Python",
        price: 399
    },
    {
        itemName: "GEN AI",
        price: 12999
    }
]

let totalValue = shoopingCart.reduce ( (acc, item) => acc + item.price, 0)
console.log("Total Cost for the Cart is", totalValue);
