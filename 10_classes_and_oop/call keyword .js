
function createUser(username, email,password){
    setUsername.call(this, username)   //call used to get username 
    this.email = email
    this.password = password
}

function setUsername (username){
    this.username = username;
    console.log("Called SetUser")
}

const chai = new createUser("Chai", "chai@google.com", "123")
console.log(chai)
console.log(chai.username)
console.log(chai.email)
console.log(chai.password)