import { Injectable } from '@angular/core';
import {CLIENTES} from "./clientes.json";
import { Cliente } from './cliente';
import  { of,Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import{map} from 'rxjs/operators';

@Injectable() 
export class ClienteService {

//definimos url como un atributo de clase 
  private urlEndPoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient ) { }
 
  getClientes():Observable<Cliente[]>{

      //El metodo pipe nos permite agregar mas operadores
    return this.http.get(this.urlEndPoint).pipe(
      //En resumen se toma la respuesta que viene en un formato json 
      //el tipo de datos de dato generico es un tipo any 
      // y a qui tomamos esta variable response lo convertimos a un listado 
      //la funcion que parece una flecha es usado para crear funciones anonimas
      //arrow function 
      map(response => response as Cliente[])
    
      );



  }






 
 
 
 
 
  //creamos un metodo para utilizar la inyeccion de dependencias
 
  //una forma
  /* getClientes():Observable<Cliente[]>{

    //el objeto http y el metodo get  siempre va a restornar un objeto del tipo observable 
    //por lo tanto de la promesa en el cuerpo de la resputa va a devolver un tipo json 
    //justo con esto hacemos un cast 
    return this.http.get<Cliente[]>(this.urlEndPoint)
    
    //Nota cuando sea un metodo siemrpe retrona en mayusculas 
   // return of(CLIENTES);

  }*/


}
