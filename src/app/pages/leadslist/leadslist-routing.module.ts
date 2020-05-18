import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadslistPage } from './leadslist.page';

const routes: Routes = [
  {
    path: '',
    component: LeadslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadslistPageRoutingModule {}
