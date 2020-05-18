import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadimagesPage } from './uploadimages.page';

const routes: Routes = [
  {
    path: '',
    component: UploadimagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadimagesPageRoutingModule {}
