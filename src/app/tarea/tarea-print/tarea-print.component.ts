import { Component, OnInit, OnDestroy } from '@angular/core';
import { TareaService } from '../shared/tarea.service';
import { Tarea } from '../shared/tarea';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'wfg-tarea-print',
  templateUrl: './tarea-print.component.html',
  styleUrls: ['./tarea-print.component.css']
})
export class TareaPrintComponent implements OnInit, OnDestroy {
  tarea: Tarea;
  id: string;
  params: any;

  constructor(private tareaService: TareaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.tareaService.getTareaHttp(this.id).subscribe((tarea: Tarea) => {
      this.tarea = tarea;
    });
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }
}
