import { NgModule } from '@angular/core';

// Rutas
import { AUTH_ROUTES } from './auth.routing';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
    
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AUTH_ROUTES
  ]
 
})
export class AuthModule { }