import { Injectable } from '@angular/core';
import { Clientes } from '../models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }



  agregarLocalStorage(cliente:Clientes)
  {
    localStorage.setItem("clientes",JSON.stringify(cliente))
  }
}
