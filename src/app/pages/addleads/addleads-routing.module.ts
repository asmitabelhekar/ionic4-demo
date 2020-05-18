import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddleadsPage } from './addleads.page';

const routes: Routes = [
  {
    path: '',
    component: AddleadsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddleadsPageRoutingModule {}
