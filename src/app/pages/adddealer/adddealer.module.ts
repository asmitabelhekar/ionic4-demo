import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddealerPageRoutingModule } from './adddealer-routing.module';

import { AdddealerPage } from './adddealer.page';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Camera } from '@ionic-native/camera/ngx';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    IonicModule,
    GooglePlaceModule,
    FlexLayoutModule,
    AdddealerPageRoutingModule
  ],
  providers:[Camera,GoogleMaps,NativeGeocoder,
    Geolocation,],
  declarations: [AdddealerPage]
})
export class AdddealerPageModule {}
