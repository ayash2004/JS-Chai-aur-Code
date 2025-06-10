class User{
    constructor(email, password){
        this.email= email
        this.password = password 
    }

    get password(){
        // return this._password.toUpperCase()
        console.log(this._password)
        return `${this._password}yash`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }
}

const yash = new User ("Yash@FB.com", "abcd456")
console.log(yash.password)