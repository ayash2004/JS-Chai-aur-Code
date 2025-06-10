const User = {
    _email: 'yash756@gmail.com',
    _password: "abc456",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value 
    },
    
    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password = value 
    }
}

const yash = Object.create(User)
console.log(yash)
console.log(yash.email)
console.log(yash.password)



