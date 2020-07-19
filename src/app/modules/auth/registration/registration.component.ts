import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, FormControl } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { RegistrationModel } from 'src/app/models/interfaces';

import csc from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import { StateCityService } from 'src/app/services/state-city.service';
import { Router } from '@angular/router';

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
  statesOfIndia: IState[];
  cityList: ICity[];

  constructor(
    private _FB:FormBuilder,
    private authService:AuthService,
    private stateCityService:StateCityService,
    private router:Router
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
      state:[[''],Validators.required],
      profession:['',Validators.required],
      gender:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',[Validators.required,passwordMatchValidator('password')]],
    })  
    this.statesOfIndia=this.stateCityService.getStatesOfCountry();
  }

  // register():void{
  //   this.authService.registration(this.registrationForm.value).subscribe(res=>
  //     console.log(res,"responce")
  //     )
  // }

  // continueRegistration():void {
  //   this.router.navigateByUrl()
  // }

  onSelectedState(id:string){
  this.cityList=this.stateCityService.getCitiesFromState(id)
  }

}
