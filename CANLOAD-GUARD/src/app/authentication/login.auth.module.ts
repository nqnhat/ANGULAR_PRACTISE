import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";


import {AuthService} from "./services/auth.service";


import { LoginComponent } from './login/login.component';


@NgModule({
    imports:[CommonModule, LoginAuthModule],
    declarations: [LoginComponent],
    providers: [AuthService]
})

export class LoginAuthModule{}