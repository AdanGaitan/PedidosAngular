import { Component, OnInit } from '@angular/core';
interface Cliente{
  nombre:string;
  apellido:string;
  edad:number;
}

interface Producto{
  nombre:string;
  precio:number;
}

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  // clientes:Array<Cliente> = new Array<Cliente>();
  // productos:Array<Producto> = new Array<Producto>();
  constructor() { }

  ngOnInit(): void {
   /*  this.clientes.push({
      nombre:'carmen',
      apellido:'najera',
      edad:23
    },
   {
      nombre:'alenjando',
      apellido:'pineda',
      edad:17
   }
    )

   this.productos.push({
     nombre:'maiz',
     precio:10
   },{
     nombre:'agua en botella',
     precio:20
   }
   ) */

  }


  guardarCliente(){
    let clientesAgregar:Array<Cliente> = new Array<Cliente>();
    clientesAgregar.push({
      nombre:'carmen',
      apellido:'najera',
      edad:23
    },
    {
        nombre:'alenjando',
        apellido:'pineda',
        edad:17
    }
    )
    localStorage.setItem("clientes",JSON.stringify(clientesAgregar));
  }

  guardarProducto(){
    let productoAgregar:Array<Producto>=new Array<Producto>();
    productoAgregar.push(
      {
        nombre:'maiz',
        precio:10
      },{
        nombre:'agua en botella',
        precio:20
      }
    )
    localStorage.setItem("productos",JSON.stringify(productoAgregar));
  }
 /*  leer(){
     this.clientes= JSON.parse(localStorage.getItem("clientes"));
     this.productos = JSON.parse(localStorage.getItem("productos"));
  } */
  eliminarCliente(){
    localStorage.removeItem("clientes");
  }
  eliminarProducto(){
    localStorage.removeItem("productos");
  }
  eliminarTodos(){
    localStorage.clear();
  }
  // actualizar en tiempo real los clientes
  get ClienteLocales(): Cliente[]{
    let clientesLocalStorage: Cliente[]= JSON.parse(localStorage.getItem("clientes"));
    if(clientesLocalStorage == null){
      return new Array<Cliente>();
    }
    return clientesLocalStorage;
  }
  get productoLocales(): Producto[]{
    let productoLocalStorage: Producto[]= JSON.parse(localStorage.getItem("productos"));
    if(productoLocalStorage == null){
      return new Array<Producto>();
    }
    return productoLocalStorage;
  }
}
