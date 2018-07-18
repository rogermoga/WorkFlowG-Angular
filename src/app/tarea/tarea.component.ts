import { Component, OnInit } from '@angular/core';
import { TareaId } from './shared/tarea-id';

/**
 * This component serves as a comunication channel between tarea-item and tarea-list
 */
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
/**
 * the initializing component method
 */
  ngOnInit() {
  }

}
