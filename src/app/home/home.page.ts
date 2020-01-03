import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, Events, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public events: Events,
  ) {}

  public login() {
    this.router.navigateByUrl('login');
  }

  public signUp() {
    this.router.navigateByUrl('signup');
    // this.navCtrl.push('app-sign-up');
  }

  public skipLogin() {
    this.router.navigateByUrl('home');
    // this.navCtrl.navigateRoot('app-home');
  }

}
