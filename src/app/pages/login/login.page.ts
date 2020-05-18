import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { Router } from '@angular/router';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginModel: any = {}
  is_error;
  hide = true;


  constructor(public menuController : MenuController,
    public apiCall : ApiServiceService,
    public router: Router,
    public networkServices : InternetServiceService,
    public toastcontroller : ToastController) { 
    this.menuController.enable(false);

  }

  ngOnInit() {
  }


  valueEnter() {
    this.is_error = 0;
  }
  ngOnDestroy() {
    this.loginModel = {};
  }

  login(data) {

    let send_date = {};

    send_date['mobile'] = this.loginModel['mobile'];
    send_date['password'] = this.loginModel['password'];

    let url = environment.base_url + "users/login"
    this.apiCall.post(url, send_date).subscribe(MyResponse => {
      localStorage.setItem('userRole', MyResponse['result']);
    localStorage.setItem('profileId',MyResponse['result']['id']);
      this.presentToast("Login Successfully");
      localStorage.setItem("loginStatus","yes");
      this.router.navigate(['/dealerslist']);
    },
      error => {
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
       this.presentToast("Please try again");
      })

  }


  async presentToast(msg) {
    const toast = await this.toastcontroller.create({
      message: msg,
      duration: 4000
    });
    toast.present();
  }
}
