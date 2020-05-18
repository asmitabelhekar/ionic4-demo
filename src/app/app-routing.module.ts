import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dealerslist',
    loadChildren: () => import('./pages/dealerslist/dealerslist.module').then( m => m.DealerslistPageModule)
  },
  {
    path: 'adddealer',
    loadChildren: () => import('./pages/adddealer/adddealer.module').then( m => m.AdddealerPageModule)
  },
  {
    path: 'dealerprofile',
    loadChildren: () => import('./pages/dealerprofile/dealerprofile.module').then( m => m.DealerprofilePageModule)
  },
  {
    path: 'termsnconditions',
    loadChildren: () => import('./pages/termsnconditions/termsnconditions.module').then( m => m.TermsnconditionsPageModule)
  },
  {
    path: 'leadslist',
    loadChildren: () => import('./pages/leadslist/leadslist.module').then( m => m.LeadslistPageModule)
  },
  {
    path: 'addleads',
    loadChildren: () => import('./pages/addleads/addleads.module').then( m => m.AddleadsPageModule)
  },
  {
    path: 'checkinternetconnection',
    loadChildren: () => import('./pages/checkinternetconnection/checkinternetconnection.module').then( m => m.CheckinternetconnectionPageModule)
  },
  {
    path: 'nodatafound',
    loadChildren: () => import('./pages/nodatafound/nodatafound.module').then( m => m.NodatafoundPageModule)
  },
  {
    path: 'uploadimages',
    loadChildren: () => import('./pages/uploadimages/uploadimages.module').then( m => m.UploadimagesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
