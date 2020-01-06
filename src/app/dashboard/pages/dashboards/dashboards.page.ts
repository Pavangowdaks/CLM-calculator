import { Component } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.page.html',
  styleUrls: ['./dashboards.page.scss'],
})
export class DashboardsPage {

  constructor(
    private navCtrl: NavController,
    public events: Events,
    private inAppBrowser: InAppBrowser) {}

  public logOut() {
    this.navCtrl.navigateForward('sign-out');
  }

  public calculator() {
    this.navCtrl.navigateForward('calculator');
  }

  public contactUs() {
    this.navCtrl.navigateForward('contact-us');
  }

  public openSocialMedia(mediaType: string) {
    let options: InAppBrowserOptions = {
      location: 'no'
    };

    switch (mediaType) {
      case 'facebook':
        this.inAppBrowser.create('https://www.facebook.com/appzuiTech', '_self', options);
        break;

      case 'google':
        this.inAppBrowser.create('https://appzui.com/', '_self', options);
        break;

      case 'map':
        this.inAppBrowser.create('https://maps.app.goo.gl/JFgXF7dUu6bGyiwy9', '_self', options);
        break;

      default:
        this.inAppBrowser.create('https://appzui.com/', '_self', options);
        break;
    }
  }

}
