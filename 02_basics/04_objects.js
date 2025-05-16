const tinder = new Object ()  //Singleton Object
const tinderUser = {}  // Non Singleton Object

// console.log(tinder);  // Expected Output: {}
// console.log(tinderUser);  // Expected Output: {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(typeof tinderUser);
// console.log(typeof tinder);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Agarwal"
        }
    }
}
const regularUser1 = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yash",
            lastname: "Agarwal"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {4: "a", 5: "b"}

// const obj4 = {obj2, obj3 }
const obj5 = Object.assign({}, obj2, obj3) 
// console.log(obj4)
// console.log(obj5);

const obj6= {...obj2, ...obj3}
const obj7= {...obj1, ...obj2}
// console.log(obj6);
// console.log(obj7);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
]

// console.log(users[1].email)
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLogged"))

// const array= ["yash", ["key1" , "key2"], "agarwal",["key3", "mom",["key5", "key6"] ]]
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,[6, 7], 5]]]

// console.log(array[1]);
// console.log(another_array[3][1]);


const course = {
    coursename: "JSInHindi",
    price: '999',
    courseteacher: "Hitesh Sir"
}

console.log(course.courseteacher);
// console.log(courseteacher); 

const {coursename} = course
console.log(coursename); //We cannot access the Objects without using dot operator hence we use Object Destruct 

const {courseteacher : teacher} = course
console.log(teacher);

// {
//     "name": "Yash",
//     "age": 23,
//     "course": "JS in Hindi",
//     "price" : "free"
// }


// [
//     {},
//     {},
//     {}
// ]

