import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PedidoComponent } from './componentes/pedido/pedido.component';
import { PedidoService } from './componentes/pedido/pedido.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { SignupComponent } from './componentes/signup/signup.component';
import { ProfileComponent } from './componentes/profile/profile.component';
import { ResponseResetComponent } from './componentes/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { RequestResetComponent } from './componentes/password/request-reset/request-reset.component';
//import { Routes } from '@angular/router';

//const routes: Routes = [{ path: 'pedidos', component: PedidoComponent}];


@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    ResponseResetComponent,
    LoginComponent,
    RequestResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
