import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { PedidoDetalle } from '../models/pedido-detalle';
import { Pedidos } from '../models/pedidos';
import { Productos } from '../models/productos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido: Pedidos = new Pedidos();
  constructor() 
  {
    this.pedido = this.ultimoPedido;
   }

  guardarLocalStorage()
  {
    localStorage.setItem("ultimoPedido",JSON.stringify(this.pedido));
  }
  
  get ultimoPedido(): Pedidos
  {

    let pedidoDeLocalStorage: Pedidos = new Pedidos(JSON.parse(localStorage.getItem("ultimoPedido")));
    
    if(pedidoDeLocalStorage == null)
    {
      return new Pedidos();
    }
    return pedidoDeLocalStorage;
  }

  get listadoPedidosLocalStorage():Pedidos[]
  {
    let pedidos:Pedidos[] = JSON.parse(localStorage.getItem("pedidos"));
    if(pedidos == null)
    {
      return new Array<Pedidos>();
    }
    return pedidos.sort((a,b)=> b.pedidoID - a.pedidoID);
  }

  guardarPedido()
  {
    let listadoPedido:Pedidos[] = new Array<Pedidos>();
    listadoPedido = this.listadoPedidosLocalStorage;
    this.pedido.pedidoID = listadoPedido.length + 1;
    listadoPedido.push(this.pedido);
    localStorage.setItem("pedidos",JSON.stringify(listadoPedido));
    localStorage.removeItem("ultimoPedido");
    this.pedido = new Pedidos(null);
  }


}
