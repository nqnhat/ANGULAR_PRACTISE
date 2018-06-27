import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router, Route} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Observable, of} from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{

  private invalideCredentialMsg:string;
  private temp : Observable<boolean>;
  private myAuthService : AuthService;
  private myRouter : Router;

  // Inject the services (my style)
  constructor( _authService:AuthService,  _router:Router) 
  { 
      this.myAuthService = _authService;
      this.myRouter = _router;
  }

  private loginForm = new FormGroup(
      {
        username: new FormControl(),
        password: new FormControl()
      }
  );

  onFormSubmit()
  {
      let uname = this.loginForm.get("username").value;
      let pwd = this.loginForm.get("password").value;
      let classTHIS = this;

      function switchRoute(checkAuthenticated:boolean) : void
      {
          if (checkAuthenticated === true)
          {
              let url = classTHIS.myAuthService.getRedirectUrl();
              console.log("Redirect URL:" + url);
              classTHIS.myRouter.navigate( [url] );
          }
          else
          {
            classTHIS.invalideCredentialMsg = "Invalid Credentials. Try Again";
          }
      }

    classTHIS.myAuthService.isUserAuthenticated(uname,pwd).subscribe(
      checkAuthenticated => switchRoute(checkAuthenticated)
    );

  }

  ngOnInit() {
  }

}
