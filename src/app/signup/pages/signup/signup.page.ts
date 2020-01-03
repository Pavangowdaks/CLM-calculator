import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController, MenuController, Events, NavController } from '@ionic/angular';
import { AuthenticationService } from '../../../common/services/authentication/authentication.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public email: string;
  public password: string;
  public name: string;
  public phone: number;
  public confirmPassword: string;
  public regex = /^\d{10}$/;
  public user: any = {};

  constructor(
    private alertCtrl: AlertController,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public async signUpWarningMessage(title, message) {
    let alertCt = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['Ok']
    });

    await alertCt.present();
  }

  public createAccount() {
    console.warn(this.user.email, this.user.password, this.user.name, this.user.phone);
    if(!this.user.email || !this.user.password || !this.user.confirmPassword || !this.user.name || !this.user.phone) {
      return this.signUpWarningMessage('Invalid SignUp', 'fill all the fields');
    } else {
      if(this.user.confirmPassword !== this.user.password) {
        return this.signUpWarningMessage('Invalid password', 'password and confirm password is mismatch');
      }

      if (!this.regex.test(this.user.phone)) {
        return this.signUpWarningMessage('Invalid Number', 'Please enter 10 digits phone number. Ex. 8722258171');
      }
    }
    let data = this.authenticationService.create(this.user).toPromise();
    this.router.navigateByUrl('calculator');
    
  }

}
