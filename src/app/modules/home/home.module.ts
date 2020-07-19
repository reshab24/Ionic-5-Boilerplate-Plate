import { NgModule } from '@angular/core';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { ProfileCartComponent } from './components/profile-cart/profile-cart.component';
import { FilterModelComponent } from './components/filter-model/filter-model.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    ProfileCartComponent,
    FilterModelComponent,
    ProfileDetailsComponent
  ]
})
export class HomePageModule {}
