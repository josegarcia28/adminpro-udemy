import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PAGES_ROUTES } from './pages/pages.routes';
import { AUTH_ROUTES } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', component: NopagefoundComponent }
];




@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PAGES_ROUTES,
    AUTH_ROUTES
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
