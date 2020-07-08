import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
interface MenuList{
  icon:String,
  name:String
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {
  menusList:Array<MenuList>=[
    {
      icon:"pricetag-outline",
      name:"Home",
    },
    {
      icon:"create-outline",
      name:"Register camplaint",
    },
    {
      icon:"eye-outline",
      name:"View camplaint status",
    },
    {
      icon:"flash-outline",
      name:"Consuption History",
    },
    {
      icon:"log-out-outline",
      name:"log out",
    }
  ]
  // <ion-icon name="pricetag-outline"></ion-icon>
  
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
