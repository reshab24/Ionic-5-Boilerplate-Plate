import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';

@Component({
  selector: 'app-profile-cart',
  templateUrl: './profile-cart.component.html',
  styleUrls: ['./profile-cart.component.scss'],
})
export class ProfileCartComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  slideOptsOne = {
    initialSlide: 1.5,
    slidesPerView: 1,
    // loop: true,
    spaceBetween: 5
  };
  
  ngOnInit() {}


  async openProfileInfoCard(){
    const model = await this.modalController.create({
      component:ProfileDetailsComponent
    });
    return await model.present(); 
  }

}
