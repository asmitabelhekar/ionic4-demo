import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';

@Component({
  selector: 'app-dealerprofile',
  templateUrl: './dealerprofile.page.html',
  styleUrls: ['./dealerprofile.page.scss'],
})
export class DealerprofilePage implements OnInit {

  // url = "http://www.mocky.io/v2/5e7b73fc2d00005c6311a122";
  noInternet  = 1;
  profileDetail: any;
  name: any;
  mobile: any;
  username : any;
  email: any;
  city: any;
  showImage : any;
  firstLetter : any;
  constructor(public apiCall: ApiServiceService,
    public networkService : InternetServiceService,
    public router: Router) { }

  ngOnInit() {
    this.getProfileDetails();
    this.noInternet = 1;
  }


  ionViewWillEnter(){
    this.noInternet = 1;
  }
  goBack() {
    this.router.navigate(['/dealerslist']);
  }
  getProfileDetails() {

    let profileId = localStorage.getItem('profileId');
    let url = environment.base_url + "roles/" + 1 + "/users/" + profileId;
    this.apiCall.get(url).subscribe(MyResponse => {
      this.noInternet = 1;
      this.profileDetail = MyResponse['result'];
      this.name = this.profileDetail.name;
      this.mobile = this.profileDetail.mobile;
      this.email = this.profileDetail.email;
      this.city = this.profileDetail.city;
      this.username = this.profileDetail.username;
      this.showImage = this.profileDetail.image;
      this.firstLetter = this.name.charAt(0);
     

    },
      error => {
        this.networkService.checkInternetConnection();
        this.networkService.onPageLoadCheckInternet();
        this.noInternet = 0;
      })
  }
  


  logOut(){
    localStorage.setItem("loginStatus","no");
    this.router.navigate(['/login']);
  }
}
