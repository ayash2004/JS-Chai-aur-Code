const accountId= 2222
let accountEmail = "yash@google.com"
var accountPassword = "121212"
accountCity = "Mumbai"
let accontState;
console.log(accountCity)
accountEmail = "ya@google.com"
accountPassword = "123456"
accountCity = "Pune"


/*Prefer not to use "var" because of issue in block scope and functional scope
Instead use "let"
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accontState])
