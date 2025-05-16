if (true){
    let a= 10
const b= 20
var c= 30
}

// console.log(a)
// console.log(b)    
// console.log(c)  

let d=100
if (true){
    let d= 10
    let e= 20
    console.log("Inner Value: ",d)
}
console.log("Outer Value: ",d)

/* ->Var knows no bounds, it attains the recent most value you alloted to it, not caring about scope of its declaration. .
->Let & const are scope bounded and are accessible only inside the block they got declared in. If their value is altered within a block inside
this block, it's only limited to that inner block and once you're out, it'll reattain it's original value.*/

function one(){
    const username = "hitesh"
    function two(){
        const website = " youtube"
        console.log(username );
    }
    // console.log(website);

     //two()
}
one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

// const addTwo = function(num){
//     return num + 2
// }
addTwo(5)

// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }