import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { LoaderService } from 'src/app/services/loaderservice/loader.service';
import { environment } from 'src/environments/environment';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';

@Component({
  selector: 'app-dealerslist',
  templateUrl: './dealerslist.page.html',
  styleUrls: ['./dealerslist.page.scss'],
})
export class DealerslistPage implements OnInit {


  // url = "http://www.mocky.io/v2/5e7b70312d00005e6311a0bf";
  dealerList : any;
  showData : any;
  serchKey: String;
  url = environment.base_url +"roles/" + 2  + "/users";

  constructor(public menuController : MenuController,
    public router : Router,
    public loader : LoaderService,
    public networkServices : InternetServiceService,
    public apiCall : ApiServiceService) {
    this.menuController.enable(true);
    this.getDealersList(this.url);
   }

  ngOnInit() {

    this.getDealersList(this.url);
    // this.events.subscribe('Event-AddCustomer', () => {
    //   this.getCustomerList(this.url);
    // });
  }

  ionViewWillEnter(){
    this.getDealersList(this.url);
  }



  OnInput(event: any) {
    this.serchKey = (event)
    if (this.serchKey.length > 3) {
      let url = environment.base_url +"roles/" + 2  + "/users?" + "search=" + this.serchKey;
      this.getDealersList(url);
    } else {
      let url = environment.base_url + "roles/" + 2  + "/users";
      this.getDealersList(url);
    }
  }
  getDealersList(url){
    let displayName = "Dealers";
    this.apiCall.get(url).subscribe(MyResponse => {
      this.dealerList = MyResponse['result']['list'];
      if(MyResponse['result']['count'] > 0){
        this.showData = 1;
        console.log("check count inside::"+ MyResponse['result']['count']);
      }else{
        this.router.navigate(['/nodatafound', { title : displayName}]);
        console.log("check count outside::"+ MyResponse['result']['count']);
        this.showData = 0;
      }
    },
      error => {
        // this.networkServices.checkInternetConnection();
        // this.networkServices.onPageLoadCheckInternet();
      })
  }
  addDealer(){
    // this.router.navigate(['/adddealer']);
    this.router.navigate(['/uploadimages']);
  }

}
