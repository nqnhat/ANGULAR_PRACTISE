export class User
{
    public userID:number
    public username:string
    public password:string
    public role:string

    constructor(_userID:number, _username:string, _password:string, _role:string)
    {
        this.userID = _userID;
        this.username = _username;
        this.password = _password;
        this.role = _role;
    }

}