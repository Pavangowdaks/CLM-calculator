import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController, LoadingController, MenuController, Events, NavController } from '@ionic/angular';
import { AuthenticationService } from '../../../common/services/authentication/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: number;
  public user: any = {};
  public data: any=[];

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    public events: Events,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  async loginErrorAlert(title, message) {
    const alertCt = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['Ok']
    });
    await alertCt.present();
  }

  public login() {
    console.warn(this.user);
    this.data = this.authenticationService.logins(this.user);
    console.warn('vm', this.data);
    if (this.data.length === 0) {
      return this.loginErrorAlert('Account Not Found', 'Enter valid email/password otherwise Please create an account');
    }
    this.router.navigateByUrl('calculator');
  }

  public signUp() {
    this.router.navigateByUrl('signup');
  }

}
