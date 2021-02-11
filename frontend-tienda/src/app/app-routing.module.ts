import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { ResponseResetComponent } from './componentes/password/response-reset/response-reset.component';
import { RequestResetComponent } from './componentes/password/request-reset/request-reset.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';

const appRoutes:Routes = [{

  path: 'pedido',
  component: PedidoComponent
},

{
  path: 'login',
  component: LoginComponent
},
{
path: 'singup',
component: SignupComponent
},

{
path: 'profile',
component: ProfileComponent
},

{
  path: 'request-reset',
  component: RequestResetComponent
  },

{
path: 'response-reset',
component: ResponseResetComponent
},

{
  path: 'pedido',
  component: PedidoComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
