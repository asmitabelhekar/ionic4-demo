import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddleadsPageRoutingModule } from './addleads-routing.module';

import { AddleadsPage } from './addleads.page';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    GooglePlaceModule,
    MatIconModule,
    MatInputModule,

    AddleadsPageRoutingModule


  ],
  declarations: [AddleadsPage]
})
export class AddleadsPageModule {}
