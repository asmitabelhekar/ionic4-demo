import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/services/common-service/common-service.service';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { LoaderService } from 'src/app/services/loaderservice/loader.service';

@Component({
  selector: 'app-checkinternetconnection',
  templateUrl: './checkinternetconnection.page.html',
  styleUrls: ['./checkinternetconnection.page.scss'],
})
export class CheckinternetconnectionPage implements OnInit {

  url = "http://3.6.135.154:37354/api/test";
  constructor(public loader : LoaderService,
    public networkService : InternetServiceService,
    public apiCall : ApiServiceService) { }

  ngOnInit() {
  }


  checkConnection(){

    this.loader.presentLoading();
    // let url = environment.base_url + "roles/" + 1 + "/users/" + 12 ;
    this.apiCall.get(this.url).subscribe(MyResponse => {
      console.log("check success:");
      window.history.back();
      this.loader.stopLoading();
    },
      error => {
        console.log("check failure:");
        this.networkService.checkInternetConnection();
          this.networkService.onPageLoadCheckInternet();
        this.loader.stopLoading();
      })


  }

  goBackword(){
    window.history.back();
  }
}
