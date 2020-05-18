import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddealerPage } from './adddealer.page';

const routes: Routes = [
  {
    path: '',
    component: AdddealerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdddealerPageRoutingModule {}
