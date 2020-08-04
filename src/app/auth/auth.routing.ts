import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

];

// export const AUTH_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
export const AUTH_ROUTES = RouterModule.forChild( routes);