import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoService } from './pedido.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { Routes } from '@angular/router';

//const routes: Routes = [{ path: 'pedidos', component: PedidoComponent}];


@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
