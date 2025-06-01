const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color= '#';
    for (let i=0; i<6 ; i++){
        color += hex[Math.floor(Math.random() *16 )];
    }
    return color;
}

let intervalId;
const colorChange = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 2000)
    }
    function changeBgColor(){
    body.style.backgroundColor = randomColor();
    }
}

const stopColor = function (){
    clearInterval(intervalId)
    intervalId = null;
};

const body = document.querySelector('body')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

start.addEventListener('click', colorChange )

stop.addEventListener('click', stopColor)










// const colorChange = function(){
//     document.body.style.backgroundColor = randomColor();
// }

// const stopColor =  function (){
    
// }
// const randomColor = function(){
//     const hex = "0123456789ABCDEF"
//     let color= '#';
//     for (let i=0; i<6 ; i++){
//         color += hex[Math.floor(Math.random() *16 )];
//     }
//     return color;
// }

// document.querySelector('#start').addEventListener('click', colorChange)

// console.log(randomColor());
// hex = "0123456789ABCDEF"
// let color ='#'
// color += hex[Math.floor(Math.random() * 16)]
// console.log(color);
// console.log(Math.floor(Math.random() * 16));
