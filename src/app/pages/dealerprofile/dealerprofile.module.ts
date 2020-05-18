import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealerprofilePageRoutingModule } from './dealerprofile-routing.module';

import { DealerprofilePage } from './dealerprofile.page';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexLayoutModule,
    DealerprofilePageRoutingModule
  ],
  declarations: [DealerprofilePage]
})
export class DealerprofilePageModule {}
