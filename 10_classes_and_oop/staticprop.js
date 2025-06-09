class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

const yash = new User("Yash")
// console.log(yash.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const android = new Teacher ("RealMe", "Realme@android.com")

android.logMe();
console.log(android.createId());
