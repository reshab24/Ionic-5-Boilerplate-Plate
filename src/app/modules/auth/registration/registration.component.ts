import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { RegistrationModel } from 'src/app/models/interfaces';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value ? null : { mismatch: true };
  };
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})

export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(
    private _FB:FormBuilder,
    private authService:AuthService
    ) { }

  ngOnInit() {
    this.registrationForm=this._FB.group({
      name:['',Validators.required],
      email:['',Validators.required],
      maritalStatus:['',Validators.required],
      mobileNumber:['',Validators.required,Validators.pattern('[6-9]\\d{9}')],
      educationQualification:['',Validators.required],
      familyMembers:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      profession:['',Validators.required],
      sdnbvfhs:[],
      // gender:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',[Validators.required,passwordMatchValidator('password')]],
    })   
  }

  register():void{
    this.authService.registration(this.registrationForm.value).subscribe(res=>
      console.log(res,"responce")
      )
  }

}
