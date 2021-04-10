import { Component, OnInit } from '@angular/core';
import { Productos } from '../models/productos';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos:Array<Productos> = new Array<Productos>();
  constructor(public productosServicio:ProductosService) { }

  ngOnInit(): void {
    this.productos = this.productosServicio.productoLocalStorage;
  }


  buscarProducto(nombreBuscar)
  {
    
    this.productos = this.productosServicio.productoLocalStorage.filter(x=>{
      return x.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    })
  }
}
