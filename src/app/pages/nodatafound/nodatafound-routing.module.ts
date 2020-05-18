import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NodatafoundPage } from './nodatafound.page';

const routes: Routes = [
  {
    path: '',
    component: NodatafoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NodatafoundPageRoutingModule {}
