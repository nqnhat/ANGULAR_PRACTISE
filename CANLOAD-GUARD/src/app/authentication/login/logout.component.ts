import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {AuthService} from "../services/auth.service";
import {User} from "../services/user";

@Component({
    selector: 'logout',	
    template: `
       <div *ngIf="loggedInUser">
         Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} | 
         <button input='input' (click)="logout()">Logout</button>
       </div>
    `
 })
 export class LogoutComponent implements OnInit
 {
    private myloggedInUser : User;
    private myAuthService : AuthService;
    private myRouter : Router;

    constructor(_authService:AuthService, _router:Router)
    {

    }

    ngOnInit()
    {
        this.myloggedInUser = this.myAuthService.getLoggedInUser();
    }

    logout()
    {
        this.myAuthService.logoutUser();
        this.myloggedInUser = null;
        this.myRouter.navigate( ["/welcome"] );
    }

    
 }