import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/pedidos';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor(public pedidosServicio:PedidosService) { }

  ngOnInit(): void {
    
  }

  calcularTotal(posicion: number)
  {
    this.pedidosServicio.pedido.actualizarCantidad(posicion);
    this.pedidosServicio.guardarLocalStorage();
  }

  guardar(){
    this.pedidosServicio.guardarPedido();
  }
  eliminar(posicion: number)
  {
    this.pedidosServicio.pedido.pedidoDetalle.splice(posicion,1);
    this.pedidosServicio.guardarLocalStorage();

  }
}
