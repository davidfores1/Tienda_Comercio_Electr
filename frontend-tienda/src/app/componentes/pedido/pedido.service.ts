import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import { Http } from '@angular/http';

@Injectable()
export class PedidoService {

  data:Pedido[];

  constructor(private http: Http) { }

  read(query=''){
  return this.http.get('http://127.0.0.1:8000/pedidos',{params:{buscar:query}});
  }

}
