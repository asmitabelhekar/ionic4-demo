import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckinternetconnectionPageRoutingModule } from './checkinternetconnection-routing.module';

import { CheckinternetconnectionPage } from './checkinternetconnection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckinternetconnectionPageRoutingModule
  ],
  declarations: [CheckinternetconnectionPage]
})
export class CheckinternetconnectionPageModule {}
