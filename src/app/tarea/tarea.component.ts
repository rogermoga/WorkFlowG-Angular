import { Component, OnInit } from '@angular/core';
import { TareaId } from './shared/tarea-id';

@Component({
  selector: 'wfg-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  tarea : TareaId;
  tareas: TareaId[];
  
  constructor() { }

  onSelectTarea(tarea: TareaId){
    this.tarea = tarea;
  }

  mostrarSuccess(tarea: TareaId){
    alert(tarea);
    console.log(tarea);
    this.tarea = null;
  }

  ngOnInit() {
  }

}
