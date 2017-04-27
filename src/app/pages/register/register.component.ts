import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, PhoneValidator, EqualPasswordsValidator} from '../../theme/validators';

import 'style-loader!./register.scss';

@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class Register {

  public form : FormGroup;
  public firstName : AbstractControl;
  public lastName : AbstractControl;
  public phone : AbstractControl;
  public email : AbstractControl;
  public password : AbstractControl;
  public repeatPassword : AbstractControl;
  public passwords : FormGroup;

  public submitted:boolean = false;

  constructor(fb:FormBuilder) {

    this.form = fb.group({
      'firstName' : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'lastName' : [''],
      'phone' : ['', Validators.compose([Validators.required,PhoneValidator.validate])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.firstName = this.form.controls['firstName'];
    this.lastName = this.form.controls['lastName'];
    this.phone = this.form.controls['phone'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
    }
  }
}
