import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service/api-service.service';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-uploadimages',
  templateUrl: './uploadimages.page.html',
  styleUrls: ['./uploadimages.page.scss'],
})
export class UploadimagesPage implements OnInit {

  fileToUpload;
  profilePic = "";
  urls: any = [];
  firstImage = "";
  secondImage = "";
  thirdImage = "";
  getData: any;

  constructor(public apiCall: ApiServiceService,
    public activatedRoute: ActivatedRoute,
    public router : Router,
    public toast: ToastController) { }

  ngOnInit() {
    this.getData = JSON.parse(this.activatedRoute.snapshot.params['dealerData']);
  }


  detectEventGallery(event, index) {
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
      if (index == '1') {
        this.handleFirstFileInput(this.fileToUpload);
        this.handleFirstFileInput(this.fileToUpload);
      } else if (index == '2') {
        this.handleSecondFileInput(this.fileToUpload);
      } else if (index == '3') {
        this.handleThirdFileInput(this.fileToUpload);
      }
      else {
        this.handleThirdFileInput(this.fileToUpload);
      }
    }
    // console.log("file uploaded::"+JSON.stringify(this.fileToUpload));
  }

  goBackword() {
    window.history.back();
  }

  handleFirstFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        this.firstImage = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
  }

  handleSecondFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        this.secondImage = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
  }

  handleThirdFileInput(files: FileList) {
    if (this.fileToUpload == null || this.fileToUpload == undefined) {
    }
    let url = "http://3.6.135.154:9000/api/" + "upload-image";
    console.log("check url : " + url);
    this.apiCall.callPostApiForImage(url, this.fileToUpload).subscribe(
      MyResponse => {

        this.urls.push(MyResponse['result']['url'])
        this.thirdImage = MyResponse['result']['url'];
        console.log("print url resonce:" + this.urls);
      }, error => {
        console.log(error);

      }
    );
  }


  async presentToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }


  addDealerData() {
    if (this.firstImage == "" || this.secondImage == "" || this.thirdImage == "") {
      this.presentToast("Please upload images");
    } else {
     
        let send_data = {};
  
  
        send_data['name'] = this.getData.fname;
        send_data['mobile'] = this.getData.mobile;
        send_data['email'] = this.getData.email;
        send_data['username'] = this.getData.uname;
        send_data['city'] = this.getData.cityName;
        send_data['state'] = this.getData.stateName;
        send_data['country'] = this.getData.countryName;
        send_data['address'] = this.getData.address;
       
        send_data['pincode'] = this.getData.pincode;
        send_data['latitude'] = this.getData.lattitude;
        send_data['longitude'] = this.getData.longitude;
        send_data['password'] = this.getData.password;
        send_data['extraFields'] = {};
        send_data['isActive'] = 1;
        send_data['image'] = this.urls;
  
  
        let url = environment.base_url + "roles/" + 2 + "/users";
        this.apiCall.post(url, send_data).subscribe(MyResponse => {
          this.router.navigate(['/dealerslist']);
          this.presentToast(MyResponse['message']);
        },
          error => {
            
            this.presentToast(error['message']);
  
          })
      
    }
  }
}
