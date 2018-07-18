import { Component, OnInit, OnDestroy } from '@angular/core';
import { TareaService } from '../shared/tarea.service';
import { Tarea } from '../shared/tarea';
import { ActivatedRoute } from '@angular/router';

/**
 * This component is being used to display the print version of a tarea with raw text
 */
@Component({
  selector: 'wfg-tarea-print',
  templateUrl: './tarea-print.component.html',
  styleUrls: ['./tarea-print.component.css']
})
export class TareaPrintComponent implements OnInit, OnDestroy {

  /**
   * The data from the tarea we want to print
   */
  tarea: Tarea;
  /**
   * The id of the tarea we want to print
   */
  id: string;
  /**
   * A variable we are using in the process
   */
  params: any;
/**
 * 
 * @param tareaService We inject the TareaService to be able to use the http methods
 * @param activatedRoute For routing purposes
 */
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
