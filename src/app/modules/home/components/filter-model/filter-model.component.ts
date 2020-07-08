import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-model',
  templateUrl: './filter-model.component.html',
  styleUrls: ['./filter-model.component.scss'],
})
export class FilterModelComponent implements OnInit {

  constructor( public modalCtrl:ModalController) { }

  ngOnInit() {}

  dismissModal():void{
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
