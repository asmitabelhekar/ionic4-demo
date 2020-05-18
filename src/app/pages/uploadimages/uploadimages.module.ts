import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadimagesPageRoutingModule } from './uploadimages-routing.module';

import { UploadimagesPage } from './uploadimages.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    IonicModule,
    UploadimagesPageRoutingModule
  ],
  declarations: [UploadimagesPage]
})
export class UploadimagesPageModule {}
