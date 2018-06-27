import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";


const loginAuthRoutes : Routes = [
    {
        path: "login",
        component: LoginComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(loginAuthRoutes)],
    exports: [RouterModule]
})
export class LoginAuthRoutingModules {}