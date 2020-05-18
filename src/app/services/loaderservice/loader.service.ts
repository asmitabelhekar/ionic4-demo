import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loader : LoadingController) { 

  }


 

async presentLoading() {
  const loading = await this.loader.create({
    message: 'Please wait...',
    // spinner: null
  });
  await loading.present();
  setTimeout(() => {
    loading.dismiss();
  },1000 );
  const { role, data } = await loading.onDidDismiss();
  console.log('Loading dismissed!' + role + ' Data: ' + data);

}

async stopLoading(){
  this.loader.dismiss();
}
}
