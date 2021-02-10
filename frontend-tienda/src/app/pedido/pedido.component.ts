import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  data: Pedido[];
  current_pedi: Pedido;
  operation = { is_new: false, is_visible: false };

  constructor(private service: PedidoService) {

    this.data = [];
  }

  ngOnInit() {
    this.service.read().subscribe(res => {
      this.data = res.json();
      this.current_pedi = new Pedido();
    });

  }

}
