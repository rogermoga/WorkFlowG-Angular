import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaService } from 'src/app/tarea/shared/tarea.service';
import { TareaId } from '../shared/tarea-id';
import { Router } from '@angular/router';

@Component({
  selector: 'wfg-tarea-list',
  templateUrl: './tarea-list.component.html',
  styles: []
})
export class TareaListComponent implements OnInit {

  obTareaService: any;

  @Input() tareas: TareaId[];
  @Input() tarea: TareaId;
  @Output() notifyTarea: EventEmitter<TareaId> = new EventEmitter<TareaId>();

  onSelect(tarea: TareaId) {
    this.notifyTarea.emit(tarea);
  }

  constructor(private tareaService: TareaService, private router: Router) { }

  ngOnInit() {
    console.log(`OnInit`);
    //this.tareas = this.tareaService.getTareas();
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
    });
  }

  onDelete(tarea: TareaId) {
    this.obTareaService = this.tareaService.deteleTareaHttp(tarea.id).subscribe(() => {
    });;
    //this.tareas = this.tareaService.getTareas();
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
    });
  }

  print(tarea: TareaId) {
    console.log(tarea.id);
    this.router.navigate([`tarea/print/${tarea.id}`]);
  }
}
