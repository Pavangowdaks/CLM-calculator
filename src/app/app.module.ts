import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

export const CREDENTIALS = {
  apiKey: "AIzaSyCCsAswMsbEdxj281s7dq92_Mg1i6n1DTU",
  authDomain: "clm-calculator-app.firebaseapp.com",
  databaseURL: "https://clm-calculator-app.firebaseio.com",
  projectId: "clm-calculator-app",
  storageBucket: "clm-calculator-app.appspot.com",
  messagingSenderId: "102292536863",
  appId: "1:102292536863:web:549f6c2f738b2173481f2a"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(CREDENTIALS),
    AngularFireAuthModule,
    HttpClientModule,
    FontAwesomeModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    InAppBrowser,
    AngularFireAuth,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
