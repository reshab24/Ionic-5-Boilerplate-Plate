import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OnlyNumberDirective } from 'src/app/directives/only-number.directive';
import { SharedModule } from '../shared/shared.module';
import { UploadPhotosComponent } from './upload-photos/upload-photos.component';

import { CommonModule } from '@angular/common';

import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthPageRoutingModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    UploadPhotosComponent,
    OnlyNumberDirective
  ],
  providers:[
    ImagePicker,
    FileChooser,
    PhotoLibrary,
    Camera
  ]
})
export class AuthPageModule {}
