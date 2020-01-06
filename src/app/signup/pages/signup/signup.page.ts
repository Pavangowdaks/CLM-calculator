import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

export class User {
    email: string;
    password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public user:User = new User();

  constructor(
    public fAuth: AngularFireAuth,
    private alertCtrl: AlertController,
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

  public async createAccount() {
    try {
      if (!this.user.email || !this.user.password) {
        return this.signUpWarningMessage('Invalid SignUp', 'fill all the fields');
      } 
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        this.router.navigateByUrl('dashboards');
      }

    } catch (err) {
      return this.signUpWarningMessage('Invalid SignUp', err.message);
    }
  }

}
