import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes = [
    { path: '**', component: NopagefoundComponent },
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

//export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
export const APP_ROUTES = RouterModule.forRoot( routes );