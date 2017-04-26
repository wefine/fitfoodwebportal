import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, private http:Http) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      this.login().subscribe(res => {
        console.log(res);
        if(res.status === 200){
          console.log(200);
        }
      });
    }
  }

  login():Observable<Response>{
    return this.http.post("http://127.0.0.1:1338/registration/user/authenticate",
      JSON.stringify({phone : "7411096374", password : "test1234"}),
      {headers:new Headers({'Content-Type':'application/json'})});
  }
}
