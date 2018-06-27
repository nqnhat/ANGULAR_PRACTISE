import {Injectable, Inject} from "@angular/core";
import {Observable, of} from 'rxjs';
import {map, find} from "rxjs/operators";

import {User} from "./user";
import { checkAndUpdateBinding } from "@angular/core/src/view/util";


let USERS = [];
USERS = [
    new User(1, "mahesh", "m123", "ADMIN"),
    new User(2, "krishna", "k123", "ADMIN")
];

let usersObservable = Observable.create(of(USERS));


@Injectable()
export class AuthService
{
    private redirectUrl: string = "/";
    private loginUrl: string = "/login";
    private isloggedIn: boolean = false;
    private loggedInUser : User;

    // Function
    getAllUsers() : Observable<User[]>
    {
        return usersObservable;
    }

    // DIFFERENT FROM THE ORIGINAL
    isUserAuthenticated(_username:string, _password:string) : Observable<boolean>
    {
        function check(listUser:Observable<User[]>): Observable<boolean>
        {
           listUser.pipe(
                map(
                    users => {
                        let user = users.find(user => (user.username === _username) && (user.password === _password));
                        if (user)
                        {
                            this.isloggedIn = true;
                            this.loggedInUser = user;

                        }
                        else
                        {
                            this.isloggedIn = false;
                        }
                    }
                )
           );
           return this.isloggedIn;


        }

        return check(this.getAllUsers());
    }

    // Function
    isUserLoggedIn() : boolean
    {
        return this.isloggedIn;
    }

    // Function
    getRedirectUrl() : string
    {
        return this.redirectUrl;
    }

    // Function
    setRedirectUrl(url : string):void
    {
        this.redirectUrl = url;
    }


    // Function
    getLoginUrl() : string
    {
        return this.loginUrl;
    }

    // Function
    getLoggedInUser() : User
    {
        return this.loggedInUser;
    }
    
    // Function
    logoutUser() : void
    {
        this.isloggedIn = false;
    }
}











