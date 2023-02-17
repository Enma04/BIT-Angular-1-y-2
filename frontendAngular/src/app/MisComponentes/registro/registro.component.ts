import { Component, OnInit } from '@angular/core';  //Se importa el OnInit
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
  
//Clase
export class RegistroComponent implements OnInit {

  /*
    ORDEN DE CARGA DE ELEMENTOS EN UNA CLASE:
      1.) constructor()              --> Espacio donde carga los elementos necesarios
      2.) ngOnChanges()              --> Esta constantemente cargando los cambios
      3.) ngOnInit()                 --> Se encarga de hacerlas peticiones para cargar los elementos en el html
      4.) ngOnCheck()                --> 
            -ngAfterContentInit      -->
            -ngAfterContentChecked   -->
            -ngAfterViewInit         --> Después de que se cargue la vista
            -ngAfterViewChecked      -->
      5.) ngOnDestroy                --> Cuando cambia de una vista a otra
  */


  //Es el tercer elemento que se carga, luego del constructor
  //y el ngOnChanges
  ngOnInit(): void {
    console.log("Cargando primero");
  }

  //El constructor es lo primero que se carga en Angular
  constructor(){
    console.log("Yo tengo más poder");
  }



  nombre: string = "";
  email: string = "";
  password: string = "";

  persona1: Persona = {
    nombre: "Enmanuel",
    apellido: "Berruecos",
    edad: 25,
    habilidades: ["programar", "Streamer", 1],
  }

  Guardar() {
    console.log(this.nombre);
  }

}
