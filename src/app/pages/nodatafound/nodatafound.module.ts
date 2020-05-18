import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NodatafoundPageRoutingModule } from './nodatafound-routing.module';

import { NodatafoundPage } from './nodatafound.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NodatafoundPageRoutingModule
  ],
  declarations: [NodatafoundPage]
})
export class NodatafoundPageModule {}
