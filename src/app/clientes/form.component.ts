import { Component, OnInit } from '@angular/core';
//importamos cliente
import{Cliente} from './cliente'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
 /*por lo tanto el formulario esta asignado
y mapeado a un objeto este objeto es un atributo*/ 
  //creamos el atributo cliente+
  public cliente:  Cliente = new Cliente()
  
  public titulo:string = "Crear cliente"
  constructor() { }

  ngOnInit(): void {
  }

  public create(): void{
    //imprimimos
    console.log("Clicked")
    console.log(this.cliente)

  }/*despues el meotdo create se va a conectar al api-rest  y va a percistir el 
    objeto que enviemos a travez de formulario */

}
