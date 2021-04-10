import { Component, OnInit } from '@angular/core';
import { Clientes } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clientes:Array<Clientes> = new Array<Clientes>();
  constructor(public clientesServicio:ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.clientesServicio.clientesLocalStorage;
  }


  buscarClientes(nombreBuscar)
  {
    
    this.clientes = this.clientesServicio.clientesLocalStorage.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    })
  }

}
