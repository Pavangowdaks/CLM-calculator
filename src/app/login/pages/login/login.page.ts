import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

export class User {
    email: string;
    password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public user:User = new User();

  constructor(
    public fAuth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
  }

  public async loginErrorAlert(title, message) {
    const alertCt = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['Ok']
    });
    await alertCt.present();
  }

  public async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        this.router.navigateByUrl('dashboards');
      }

    } catch (err) {
      return this.loginErrorAlert('login error', err.message);
    }
  }

  public async signUp() {
    await this.router.navigateByUrl('signup');
  }

}
