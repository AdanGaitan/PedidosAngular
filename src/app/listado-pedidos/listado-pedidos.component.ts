import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  listadoPedido: Pedidos[] = new Array<Pedidos>();
  constructor(public pedidosServicio:PedidosService) { }

  ngOnInit(): void {
    this.listadoPedido = this.pedidosServicio.listadoPedidosLocalStorage;
  }

}
