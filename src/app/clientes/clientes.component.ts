import { Component, OnInit } from '@angular/core';
import {Cliente} from "./cliente";
import{ClienteService } from "./cliente.service"
//import { CLIENTES } from "./clientes.json";
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente [ ] ;

  //A qui vamos a inyectar inyeccion de dependencias 
  //vamos a definir un atributo de la clase 
  //Asignar el cliente service al atributo
  constructor(private clienteService: ClienteService ) { 
 
  }
   
 
  
  //asignar el valor clientes = clientes 
  ngOnInit(){

  
    //no olvidar parentesis
    this.clienteService.getClientes().subscribe(
      //dentro deeste metodo el observador
      //seria asignar en el atributo clientes el valor  que se esta recibiendo desde cliente servie 
      //asigans paramtros a this.clientes 
      /*
        forma mas larga de hacerlo 
      function (clientes)
      {
        this.cllientes = clientes
      }
      
      */
      
      //usamo parentesis si usamos mas de un argumento 
      (clientes) => this.clientes = clientes

    );
    
  
  }

  
}
