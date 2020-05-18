import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TermsnconditionsPage } from './termsnconditions.page';

const routes: Routes = [
  {
    path: '',
    component: TermsnconditionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsnconditionsPageRoutingModule {}
