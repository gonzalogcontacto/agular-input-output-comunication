import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  // Definir el parámetro de entrada que me va a permitir recibir info desde el padre
  @Input() parametroEntrada: string = "Sin nombre";
    
  // Definir el parámetro de salida que me va a permitir recibir info en el padre
  @Output() parametroSalida = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPropiedad(){
    console.log('Click en el button del hijo');
    this.parametroEntrada = 'Ana Belén'

    //Aviso al padre , Ejecutando el evento de salida y pasándole el string que he modificado
    this.parametroSalida.emit(this.parametroEntrada);

  }



}
