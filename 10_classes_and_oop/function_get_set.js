function User(email,password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function (){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const yash = new User("yash@456.com", "789yash")
console.log(yash)
console.log(yash.email);
console.log(yash.password);

