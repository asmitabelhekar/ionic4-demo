import { Component, OnInit, ChangeDetectorRef,ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';

@Component({
  selector: 'app-addleads',
  templateUrl: './addleads.page.html',
  styleUrls: ['./addleads.page.scss'],
})
export class AddleadsPage implements OnInit {
  isActive = false;
  pincode: any;
  lattitude;
  longitude;
  cityName;
  options: any;
  stateName;
  countryName;
  address: string;
  @ViewChild('map',{static: false}) mapElement: ElementRef;
  map: GoogleMap;
  loc: any = {};
  leadModel: any = {};
  constructor(public router: Router,
    public platform : Platform,
    public toast : ToastController,
    public networkService : InternetServiceService,
    private changeDetectorRef: ChangeDetectorRef,
    public apiCall: ApiServiceService) { }

  ngOnInit() {
  }


  addLeadsData(data) {

    let send_data = {};


    send_data['name'] = this.leadModel['fname'];
    send_data['mobile'] = this.leadModel['mobile'];
    send_data['email'] = this.leadModel['email'];

    if(this.cityName == "" || this.cityName == null || this.cityName == undefined){
    }else{
      send_data['city'] = this.cityName;
    }

    if(this.stateName == "" || this.stateName == null || this.stateName == undefined){
    }else{
      send_data['state'] = this.stateName;

    }

    if(this.countryName == "" || this.countryName == null || this.countryName == undefined){
    }else{
      send_data['country'] =this.countryName;
    }

    if(this.loc['address'] == "" || this.loc['address'] == null || this.loc['address'] == undefined){
    }else{
      send_data['address'] =this.loc['address'];
    }

    if(this.pincode == "" || this.pincode == null || this.pincode == undefined){
    }else{
      send_data['pincode'] =this.pincode;
    }

    if(this.lattitude == "" || this.lattitude == null || this.lattitude == undefined){
    }else{
      send_data['latitude'] =this.lattitude;
    }

    if(this.longitude == "" || this.longitude == null || this.longitude == undefined){
    }else{
      send_data['longitude'] =this.longitude;
    }


    // send_data['address'] = this.loc['address'];
    // send_data['pincode'] = this.pincode;
    // send_data['latitude'] = this.lattitude;
    // send_data['longitude'] = this.longitude;
    send_data['extraFields'] = {};

    console.log("Show leads data::" + JSON.stringify(data));
    let url = environment.base_url + "leads";
    this.apiCall.post(url, send_data).subscribe(MyResponse => {
      // alert("success:"+MyResponse);
      this.presentToast(MyResponse['message']);
      this.router.navigate(['/leadslist']);
      // this.leadList = MyResponse['result']['list'];
    },
      error => {
        this.networkService.checkInternetConnection();
        this.networkService.onPageLoadCheckInternet();
        this.presentToast(error['message']);
      })
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  goBackword() {
    this.router.navigate(['/leadslist']);
  }
  handleAddressChange(data) {

    console.log("Address Data", data);

    this.lattitude = data.geometry.location.lat();
    this.longitude = data.geometry.location.lng();
    this.addMarker();

    console.log("lat", this.lattitude, this.longitude);
    let string = "";
    string = data['formatted_address']
    let arr = [];
    let str = "";
    let ss = [];
    arr = string.split(",");
    for (let index = arr.length - 1; index >= 0; index--) {
      console.log(index, "data ", arr[index]);
      this.loc['landmark'] = arr[2];
      this.loc['address'] = data.vicinity;
      this.loc['location'] = data.name;
      this.countryName = arr[arr.length - 1] != null ? arr[arr.length - 1] : "";
      str = arr[arr.length - 2] != null ? arr[arr.length - 2] : "";
      let statestr = str.split(' ');
      ss = statestr;
      this.stateName = ss[1];
      this.pincode = ss[2];
      this.cityName = arr[arr.length - 3] != null ? arr[arr.length - 3] : "";
      this.changeDetectorRef.detectChanges();

    }
    console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.loc['landmark'] , this.loc['location']);
  }


  async addMarker() {
    this.platform.ready().then(async (val) => {

      console.log("map", val);

      let marker = await this.map.addMarker({
        title: 'Move pin to adjust',
        icon: 'red',
        animation: 'DROP',
        draggable: true,
        visible: true,
        position: {
          lat: this.lattitude,
          lng: this.longitude
        },

      })
    })
   
  }
}
