import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OnlyNumberDirective } from 'src/app/directives/only-number.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    AuthPageRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    OnlyNumberDirective
  ],
})
export class AuthPageModule {}
