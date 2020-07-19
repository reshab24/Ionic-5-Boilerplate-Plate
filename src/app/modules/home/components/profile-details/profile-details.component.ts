import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss'],
})
export class ProfileDetailsComponent implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    // autoplay: true
  };
  
  segmentModel:string='personalInfo';

  sliderOne: any;

  constructor( private modalCtrl:ModalController) 
  { 
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 995
        },
        {
          id: 925
        },
        {
          id: 940
        },
        {
          id: 943
        },
        {
          id: 944
        }
      ]
    };
  }

  ngOnInit() {}

  dismissModal():void{
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  segmentChanged(event){
    // console.log(this.segmentModel);
    // console.log(event);
    // console.log(event.detail.value);
    // console.log();
    this.segmentModel=event.detail.value;
  }

}
