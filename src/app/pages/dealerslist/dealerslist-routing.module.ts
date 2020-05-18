import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealerslistPage } from './dealerslist.page';

const routes: Routes = [
  {
    path: '',
    component: DealerslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DealerslistPageRoutingModule {}
