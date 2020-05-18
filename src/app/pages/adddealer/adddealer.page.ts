import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';

import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { environment } from 'src/environments/environment';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   Marker,
//   GoogleMapsAnimation,
//   MyLocation
// } from '@ionic-native/google-maps/ngx';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";

// import { Diagnostic } from '@ionic-native/diagnostic/ngx';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { google } from "google-maps";
// import { GoogleMaps } from '@ionic-native/google-maps/ngx';

import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
// import { GoogleMapsEvent, GoogleMap, GoogleMaps } from '@ionic-native/google-maps';
import { NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { NativeGeocoder, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { ToastController, Platform, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { LoaderService } from 'src/app/services/loaderservice/loader.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InternetServiceService } from 'src/app/services/internet-service/internet-service.service';
@Component({
  selector: 'app-adddealer',
  templateUrl: './adddealer.page.html',
  styleUrls: ['./adddealer.page.scss'],
})
export class AdddealerPage implements OnInit {
  showMap = 1;

  pincode: any;
  lattitude;
  longitude;
  cityName;
  options: any;
  stateName;
  countryName;
  address: string;
  profilePic = "";
  urls: any = [];
  fileToUpload
  file: any;
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  google: google;
  loc: any = {};


  dealerModel: any = {};
  constructor(public router: Router,
    public apiCall: ApiServiceService,
    private platform: Platform,
    public diagnostic : Diagnostic,
    public toast: ToastController,
    public networkService : InternetServiceService,
    public toastCtrl : ToastController,
    public googleMaps: GoogleMaps,
    public locationAccuracy : LocationAccuracy,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private changeDetectorRef: ChangeDetectorRef,
    public camera: Camera) { }


  ionViewWillEnter() {
    // this.initMap();
  }


 
  detectEventGallery(event) {
    console.log(event);
    let files = event.target.files;
    console.log(files);
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
        }
        console.log(file);
        this.fileToUpload = file;
        reader.readAsDataURL(this.fileToUpload);
      }
      this.handleFileInput(this.fileToUpload); // 1 for event gallery upload 
    }
    // console.log("file uploaded::"+JSON.stringify(this.fileToUpload));
  }



  handleFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        this.profilePic = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
  }

  handleAddressChange(data) {

    console.log("Address Data", data);

    this.lattitude = data.geometry.location.lat();
    this.longitude = data.geometry.location.lng();
    console.log("Address Data lattitude one::", this.lattitude);
    console.log("Address Data longitude one::", this.longitude);
    this.loadMap();
    // this.addMarker();

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
    console.log(this.cityName, this.stateName, this.countryName, this.pincode, this.loc['landmark'], this.loc['location']);
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
      this.getAddressFromCoords(event[0]['lat'],event[0]['lng']);
      console.log("Address Data lattitude three::", this.lattitude);
    console.log("Address Data longitude three::", this.longitude);
    })

  }

  captureImage() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      // this.profilePic = imageData;
      this.handleFileInput(imageData);
      console.log("check base64 image::" + base64Image);
      console.log("capture image::" + imageData);
    }, (err) => {
      // Handle error
    });
  }

  goBackword() {
    this.router.navigate(['/dealerslist']);
  }

  addDealerData(data) {

    if (this.pincode == "" || this.pincode == null || this.pincode == undefined) {
      this.pincode = "123456";
    } else {
      this.pincode = this.pincode;
    }

    let dealerData = {
      "fname" : this.dealerModel['fname'],
      "uname" : this.dealerModel['uname'],
      "mobile" : this.dealerModel['mobile'],
      "email" : this.dealerModel['email'],
      "password" : this.dealerModel['password'],
      "address" : this.loc['address'],
      "city" : this.cityName,
      "state" : this.stateName,
      "country" : this.countryName,
      "pincode" : this.pincode,
      "lattitude" : this.lattitude,
      "longitude" : this.longitude,
      "extraFields" : {},
      "isActive" : 1,
    }
    this.router.navigate(['/uploadimages', { dealerData : JSON.stringify(dealerData) }]);
    // if (this.profilePic == "") {
    //   alert("Please upload image first");
    // } else {
    //   console.log("dealer dayta::" + JSON.stringify(data));
    //   let send_data = {};


    //   send_data['name'] = this.dealerModel['fname'];
    //   send_data['mobile'] = this.dealerModel['mobile'];
    //   send_data['email'] = this.dealerModel['email'];
    //   send_data['username'] = this.dealerModel['uname'];
    //   send_data['city'] = this.cityName;
    //   send_data['state'] = this.stateName;
    //   send_data['country'] = this.countryName;
    //   send_data['address'] = this.loc['address'];
    //   if (this.pincode == "" || this.pincode == null || this.pincode == undefined) {
    //     send_data['pincode'] = "123456";
    //   } else {
    //     send_data['pincode'] = this.pincode;
    //   }
    //   send_data['pincode'] = this.pincode;
    //   send_data['latitude'] = this.lattitude;
    //   send_data['longitude'] = this.longitude;
    //   send_data['password'] = this.dealerModel['password'];
    //   send_data['extraFields'] = {};
    //   send_data['isActive'] = 1;
    //   send_data['image'] = this.profilePic;


    //   console.log("Show users data::" + JSON.stringify(data));
    //   let url = environment.base_url + "roles/" + 2 + "/users";
    //   this.apiCall.post(url, send_data).subscribe(MyResponse => {
    //     this.router.navigate(['/dealerslist']);
    //     this.presentToast(MyResponse['message']);
    //   },
    //     error => {
    //       this.networkService.checkInternetConnection();
    //       this.networkService.onPageLoadCheckInternet();
    //       this.presentToast(error['message']);

    //     })
    // }

  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }

  requestAccuracy() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then((val) => {
          console.log('Request successful.', val)
        },
          error => {
            console.log('Error requesting location permissions', error)
          }
        );
      }
    });
  }
  ngOnInit() {
    // this.getCurrentPosition();
    console.log("im onit");
    // this.loader.showBlockingLoaderAuth();
    //  this.storage.get('location_data').then((val)=>{
    //    console.log("latlng val",val)
    //    if(val != null){
    //     this.loc = val;
    //     this.lattitude = this.loc['lat'];
    //     this.longitude = this.loc['lng'];
    //     this.load();

    //    }
    //    else{
    //     this.platform.ready().then((val) => {

    //      this.getCurrentPosition();
    //     })
    //    }
    //  })

   

  }
  

  getCurrentPosition(){

    console.log("current pos call");
    let options = { enableHighAccuracy : true }; 
    this.geolocation.getCurrentPosition(options).then((resp) => {

      console.log("cord", resp.coords.latitude, resp.coords.longitude);
      this.lattitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
      this.load();


    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }

  load() {
    try {
      this.platform.ready().then((val) => {

        this.loadMap();


      })
    }
    catch (err) {
      console.log("location", err);
    }
  }

  getAddressFromCoords(lattitude, longitude) {
    try {
      console.log("getAddressFromCoords " + lattitude + " " + longitude);
      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };


      this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
        .then((result: NativeGeocoderResult[]) => {
          this.address = "";
          let responseAddress = [];
          console.log("result", result);

          this.loc = {};

          this.loc['location'] = result[0]['subLocality'] + ", " + result[0]['locality'] + ", " + result[0]['subAdministrativeArea'];
          this.loc['address'] = result[0]['thoroughfare'];
          this.cityName = result[0]['subAdministrativeArea'] == "" ? result[0]['locality'] : result[0]['subAdministrativeArea'];
          this.stateName = result[0]['administrativeArea'];
          this.countryName = result[0]['countryName'];
          // this.loader.hideBlockingLoaderAuth();

          // for (let [key, value] of Object.entries(result[0])) {
          //   if(value.length>0)
          //   responseAddress.push(value);

          // }
          console.log("address", this.loc);


        })
        .catch((error: any) => {
          this.address = "Address Not Available!";
      // this.loader.hideBlockingLoaderAuth();

        });
    }
    catch (err) {
      console.log("get address function", err);
      // this.loader.hideBlockingLoaderAuth();

    }

  }


  loadMap() {
    try {
      console.log("lat lng", this.longitude, this.lattitude);
      this.map = GoogleMaps.create('map_canvas', {
        camera: {
          target: {
            lat: this.lattitude,
            lng: this.longitude
          },
          zoom: 18,
          tilt: 30
        }
      });
      console.log("Address Data lattitude two::", this.lattitude);
    console.log("Address Data longitude two::", this.longitude);
    this.showMap = 0;
      this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
        async (data) => {
            console.log("Click MAP",data);


            await this.map.animateCamera({
              target: {
                lat: this.lattitude,
                lng: this.longitude
              },          
              zoom: 17,
              duration: 2000
            });
            

            let marker = await this.map.addMarker({
              title: 'Move pin to adjust',
              icon: 'red',
              animation: 'DROP',
              draggable: true,
              visible : true,
              position:{
                lat: this.lattitude,
                lng: this.longitude
              }, 
                       
            })
            // marker.on(GoogleMapsEvent.MARKER_DRAG_END)
            // .subscribe((event) => {
              
            //   console.log("drag end",event);
             
               
            // });
            this.getAddressFromCoords(event[0]['lat'],event[0]['lng']);

            // this.loader.hideBlockingLoaderAuth();
      
            // this.goToMyLocation();
            

        }
      );
    }
    catch (err) {
      // this.loader.hideBlockingLoaderAuth();
      console.log("loadmap function", err);
    }
  }


  goToMyLocation() {

    try {
      this.diagnostic.getLocationAuthorizationStatus().then(async (successCallback) => {

        console.log("success", successCallback);

        this.requestAccuracy();

      })
      // this.loader.hideBlockingLoaderAuth();

      
  }
    catch (err) {
      // this.loader.hideBlockingLoaderAuth();

      console.log("go to my location function", err);

    }
  }
 
  async showToast(message: string) {
    let toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });
    toast.present();
  }

  // async goBackword() {
  //   let send_data = {};
  //   send_data['lat'] = this.lattitude;
  //   send_data['lng'] = this.longitude;
  //   send_data['location'] = this.loc['location'];
  //   send_data['address'] = this.loc['address'];
  //   send_data['landmark'] = this.loc['landmark'];
  //   send_data['cityName'] = this.cityName;
  //   send_data['stateName'] = this.stateName;
  //   send_data['countryName'] = this.countryName;

 
  // }
  refresh(){
    this.ngOnInit();
  }
}
