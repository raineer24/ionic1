import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  regPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserServiceProvider) {
    this.regPage = 'RegisterPage';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
