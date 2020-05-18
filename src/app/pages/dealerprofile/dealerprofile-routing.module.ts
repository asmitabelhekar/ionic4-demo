import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerprofilePage } from './dealerprofile.page';

const routes: Routes = [
  {
    path: '',
    component: DealerprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerprofilePageRoutingModule {}
