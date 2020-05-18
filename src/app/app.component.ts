import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  appPages: any;
  constructor(
    private platform: Platform,
    public router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.appPages = [
      {
        title: 'Home',
        url: '/dealerslist',

      },
      {
        title: 'Leads',
        url: '/leadslist',

      },
      {
        title: 'Profile',
        url: '/dealerprofile',

      },
      {
        title: 'Terms and Conditions',
        url: '/termsnconditions',

      },
      {
        title: 'Log Out',
        url: '',

      }
    ];
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });

    let checkLoginStatus = localStorage.getItem('loginStatus');
    if (checkLoginStatus == 'yes') {
      this.router.navigate(['/dealerslist']);
    } else if (checkLoginStatus == 'no') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  sideMenuClicked(pageName) {
    console.log("pagename::" + pageName);

    if (pageName == "Log Out") {
      localStorage.setItem("loginStatus", 'no');
    }
  }
}
