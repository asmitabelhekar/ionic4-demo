import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { TermsnconditionsPageRoutingModule } from './termsnconditions-routing.module';
import { Storage } from '@ionic/storage';
import { TermsnconditionsPage } from './termsnconditions.page';
import { GoogleMaps } from '@ionic-native/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TermsnconditionsPageRoutingModule
  ],
  providers: [GoogleMaps],
  declarations: [TermsnconditionsPage]
})
export class TermsnconditionsPageModule {}
