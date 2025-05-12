// const myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof(myDate));

// const myCreatedDate = new Date(2023, 0, 23)
// const myCreatedDate = new Date(2023, 0, 23, 5, 3)
// const myCreatedDate = new Date(23 , 3, 25)
const myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Date.now())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.toLocaleDateString())
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    day: "2-digit", 
    weekday: "long",
    month: "long"
}));
