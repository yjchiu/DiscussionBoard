import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    name : '',
  }
  constructor(private _httpServide:HttpService, private _cookieService:CookieService, private _router:Router) { 
    if(this._cookieService.get("loginuserName")){
      this._router.navigate(['/dashboard']);
    } 
  }

  ngOnInit() {
  }

  getUser(form){
    if(!form.valid){
      return;
    }
    this._httpServide.getOneUser(this.user)
    .then(userfinded=>{
      if(userfinded != null){
        console.log("fined: ", userfinded);
        this._cookieService.put("loginuserName", userfinded.name);
        this._cookieService.put("loginuserId", userfinded._id);
        this.user={
          name:'',
        }
        form.resetForm();
        this._router.navigate(['/dashboard']);
      }else{
        this._httpServide.createUser(this.user)
        .then(usercreated=>{
          console.log("created: ", usercreated);
          this._cookieService.put("loginuserName", usercreated.name);
          this._cookieService.put("loginuserId", usercreated._id);
          this.user={
          name:'',
          }
          form.resetForm();
          this._router.navigate(['/dashboard']);
        })
      }
    })
  }

}
