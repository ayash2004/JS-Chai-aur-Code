// Immediately Invoked Function Expressions (IIFE)   Function Likhte he Execute Karwana


// 2 Reasons to Use IIFE: 1) to Avoid the Pollution from Global Scope 2) To Execute Function Immediately


///    Remember to end the Fucntion with a Semicolon so that the Next Function can be Executed 


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


(() => (
    console.log("Yash")
) ) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Agarwal')   //Passing Paramter in IIFE



