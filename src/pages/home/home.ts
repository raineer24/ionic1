import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  menuData = [
    { title: "Our Menu", pic: "assets/imgs/omg-02.png", pushPage: "MenuPage" },
    { title: "Account", pic: "assets/imgs/omg-logo.png", pushPage: "AccountPage" },
    { title: "About Us", pic: "assets/img/soup1.jpg", pushPage: "AboutPage" },
    { title: "Locations", pic: "assets/img/soup1.jpg", pushPage: "LocationPage" }
  ];


  logPage: any

  constructor(public navCtrl: NavController) {
    this.logPage = 'LoginPage';
  }
}
