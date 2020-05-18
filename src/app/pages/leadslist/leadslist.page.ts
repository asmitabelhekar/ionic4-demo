import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoaderService } from 'src/app/services/loaderservice/loader.service';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';

@Component({
  selector: 'app-leadslist',
  templateUrl: './leadslist.page.html',
  styleUrls: ['./leadslist.page.scss'],
})
export class LeadslistPage implements OnInit {

  serchKey: String;
  leadsList = [];
  showData  : any;
  url = environment.base_url + "leads";
  // url = "http://www.mocky.io/v2/5e7b72742d00005c6311a0fb";
  leadList: any;
 

  constructor(public menuController: MenuController,
    public apiCall: ApiServiceService,
    public loader : LoaderService,
    public networkServices : InternetServiceService,
    public router: Router) {
    this.menuController.enable(true);
    this.getLeadsList(this.url);
  }

  ngOnInit() {
    this.getLeadsList(this.url);
  }

  ionViewWillEnter() {
    this.getLeadsList(this.url);
  }
  getLeadsList(url) {
  // this.loader.presentLoading();
  let displayName = "Leads"
    this.apiCall.get(url).subscribe(MyResponse => {
      this.leadList = MyResponse['result']['list'];
      if(MyResponse['result']['count'] > 0){
        this.showData = 1;
        console.log("check count inside::"+ MyResponse['result']['count']);
      }else{
      this.router.navigate(['/nodatafound', { title : displayName}]);
        console.log("check count outside::"+ MyResponse['result']['count']);
        this.showData = 0;
      }
      // this.loader.stopLoading();
    },
      error => {
        this.networkServices.checkInternetConnection();
        this.networkServices.onPageLoadCheckInternet();
      })
  }

  addLeads() {
    this.router.navigate(['/addleads']);
  }
  OnInput(event: any) {
    this.serchKey = (event)
    if (this.serchKey.length > 3) {
      let url = environment.base_url +"leads?" + "search=" + this.serchKey;
      this.getLeadsList(url);
    } else {
      let  url = environment.base_url + "leads";
      this.getLeadsList(url);
    }
  }
}
