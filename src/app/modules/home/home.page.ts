import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterModelComponent } from './components/filter-model/filter-model.component';

interface MenuList{
  icon:String,
  name:String
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})



export class HomePage implements OnInit {
  menusList:Array<MenuList>=[
    {
      icon:"pricetag-outline",
      name:"Home",
    },
    // {
    //   icon:"create-outline",
    //   name:"Register camplaint",
    // },
    // {
    //   icon:"eye-outline",
    //   name:"View camplaint status",
    // },
    // {
    //   icon:"flash-outline",
    //   name:"Consuption History",
    // },
    {
      icon:"log-out-outline",
      name:"log out",
    }
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  openFilterModel() :void{
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: FilterModelComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
