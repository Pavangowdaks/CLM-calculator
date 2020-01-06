import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.page.html',
  styleUrls: ['./sign-out.page.scss'],
})
export class SignOutPage implements OnInit {

  public loading: any;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
  ) {}

  public async ngOnInit() {
    await this.signoutAlert();
  }

   public async signoutAlert() {
    this.loading = await this.loadingCtrl.create({
      message: 'Please wait....'
    });
    await this.loading.present();

    setTimeout(() => {
      this.signout();
    }, 1000);
  }

  public async signout() {
    await this.loading.dismiss();
    this.navCtrl.navigateRoot('/login');
  }

}
