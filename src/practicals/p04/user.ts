export class User {
    public username: string = '';
    private password: string;
    private LOGIN_ATTEMPS: number = 0;

    constructor(username: string , password: string) {
        this.username = username;
        this.password = password;
    }

    private validatePassword (password: string): boolean {
        return this.password === password;
    }

    login(password: string): boolean {
        this.LOGIN_ATTEMPS  = this.LOGIN_ATTEMPS + 1;
        if (this.password === password) {
            return true;
        }else
        return false;
    }

    getLoginAttempts(): number{
        return this.LOGIN_ATTEMPS;
    }

}


const user = new User('john_doe', 'secret123')

console.log(user.username)
// john_doe

user.username = 'jane_doe'

console.log(user.username)
// jane_doe

console.log(user.getLoginAttempts())
// 0

console.log(user.login('wrong_password'))
// false

console.log(user.getLoginAttempts())
// 1

console.log(user.login('wrong_password'))
// false

console.log(user.getLoginAttempts())
// 2

console.log(user.login('wrong_password'))
// false

console.log(user.getLoginAttempts())
// 3

console.log(user.login('secret123'))
// true

console.log(user.getLoginAttempts())
// 4

