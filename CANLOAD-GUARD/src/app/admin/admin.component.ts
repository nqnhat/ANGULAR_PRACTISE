import {Component} from "@angular/core";

@Component({
    template: `     // we have that symbol, look carefully
        <h2>Welcome to Admin Home</h2>
	    <a [routerLink]="['person-list']" routerLinkActive="active">View Person List</a>
	    <router-outlet></router-outlet>
    `
})
export class AdminComponent
{}
