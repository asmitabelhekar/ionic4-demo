import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerslistPageRoutingModule } from './dealerslist-routing.module';

import { DealerslistPage } from './dealerslist.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    DealerslistPageRoutingModule
  ],
  declarations: [DealerslistPage]
})
export class DealerslistPageModule {}
