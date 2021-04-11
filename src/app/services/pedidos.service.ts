import { Injectable } from '@angular/core';
import { PedidoDetalle } from '../models/pedido-detalle';
import { Pedidos } from '../models/pedidos';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedidos = new Pedidos();
  constructor() { }

  
 
}
