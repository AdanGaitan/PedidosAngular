import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';
import { PedidosService } from '../services/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes:Array<Clientes> = new Array<Clientes>();
  constructor(public clientesServicio:ClientesService, public pedidosServicio:PedidosService,public route: Router) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage;
  }


  buscarClientes(nombreBuscar)
  {
    
    this.clientes = this.clientesServicio.clientesLocalStorage.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    })
  }

  irAProductos(cliente:Clientes)
  {
    this.pedidosServicio.pedido.clienteID = cliente.clienteID;
    this.pedidosServicio.pedido.nombreCliente= `${cliente.nombre} ${cliente.apellido}`;
    
    this.route.navigateByUrl("/productos");
  }

}
