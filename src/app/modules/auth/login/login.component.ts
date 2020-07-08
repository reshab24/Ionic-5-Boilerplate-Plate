import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private _FB:FormBuilder,
    private authService:AuthService
    ) { }

  onChanges(){
  }
  ngOnInit() {
     this.loginForm=this._FB.group({
      mobileNumber:['',[Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      password:['',Validators.required]
    })   
  }

  login(){
  console.log(this.loginForm.value)
  this.authService.login(this.loginForm.value).subscribe(res=>
    console.log(res,"responce")
    )
  }

}
