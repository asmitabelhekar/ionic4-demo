import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeadslistPageRoutingModule } from './leadslist-routing.module';

import { LeadslistPage } from './leadslist.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    LeadslistPageRoutingModule
  ],
  declarations: [LeadslistPage]
})
export class LeadslistPageModule {}
