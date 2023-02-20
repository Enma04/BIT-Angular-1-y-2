import { Component, OnInit } from '@angular/core';  //Se importa el OnInit
import { Persona } from 'src/app/interfaces/persona';
import { MensajesService } from 'src/app/servicios/mensajes.service';

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
    console.log("Cargando el OnInit");
  }


  


  //--------------------------------------------------------------------
  //CONSTRUCTOR DE LA CLASE
  //--------------------------------------------------------------------

  /*
  El constructor es lo primero que se carga en Angular.

  Definimos una variable msj de tipo MensajeService
  para podeer hacer uso de este servicio, sus variables
  y métodos; msj debe ser público para usar la variable
  en el html, de lo contrario, es mejor manejarla privada
  para uso local (solamente en el TypeScript).
  */

  constructor(public msj:MensajesService){ 
    console.log("Yo tengo más poder");
  }






  //--------------------------------------------------------------------
  //VARIABLES DE LA CLASE
  //--------------------------------------------------------------------

  nombre: string = "";
  email: string = "";
  password: string = "";
  mostrar: boolean = true;

  //VARIABLES DE TIPO OBJETO
  persona1: Persona = {
    nombre: "Enmanuel",
    apellido: "Berruecos",
    edad: 25,
    habilidades: ["programar", "Streamer", 1],
  }





  //--------------------------------------------------------------------
  // FUNCIONES DE LA CLASE RegistroComponent
  //--------------------------------------------------------------------



  //Guardar la información
  Guardar() {
    //console.log(this.nombre);
    //this.msj.datos.push({ mensaje: "push al array" });
    //this.msj.miMsj = "Usuario Guardado!";
    
    //Hacemos uso de la función que almacena el tipo de mensaje
    this.msj.Cargar("success", "Usuario Registrado!", 5000);
    this.msj.Cargar( "danger", "Usuario no Registrado!", 6000);


    //Lo último que se hace (limpiar datos)
    this.nombre = "";
    this.email = "";
    this.password = "";
  }


  //Mostrar u Ocultar el registro
  MostrarOcultar() {
    this.mostrar = !this.mostrar;
  }

}
