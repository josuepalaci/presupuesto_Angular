import { Component, OnInit } from '@angular/core';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = 'IngresoSelect';
  descripcionInput:string;
  valorInput:number;

  constructor(private egresoServicio:EgresoServicio, private ingresoServicio:IngresoServicio) { }

  ngOnInit() {
  }

  tipoOperacion(evento){
    this.tipo = evento.target.value;
  }

  agregarValor(){
    if(this.tipo === 'IngresoSelect'){
      this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput, this.valorInput));
    } else {
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput, this.valorInput));
    }
  }

}
