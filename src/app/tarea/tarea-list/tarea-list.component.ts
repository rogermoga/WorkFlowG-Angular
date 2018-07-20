import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TareaService } from 'src/app/tarea/shared/tarea.service';
import { TareaId } from '../shared/tarea-id';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TAREAS } from '../shared/mock-tarea';
 
/**
 * This component is in charge of the list of tareas
 */
@Component({
  selector: 'wfg-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent implements OnInit {

  /**
   * For closing the modal purposes
   */
  closeResult : string;
  obTareaService: any;
  temp: Array<TareaId>;
  rows: Array<TareaId>;
/**
  We change the color of the text of the table using Angular binding
*/
  titlestyle ="blue";
  
  /**
   * @ignore
   */
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  /**
   * The list of tareas
   */
  @Input() tareas: TareaId[];

  /**
   * A single tarea
   */
  @Input() tarea: TareaId;

  /**
   * The tarea that we are sending out
   */
  @Output() notifyTarea: EventEmitter<TareaId> = new EventEmitter<TareaId>();

  /**
   * We bind the rows variable to the tareas array. This way all the tareas get added to the table as rows
   */
  


/**
* This function sends the tarea to the from(tarea-item). It checks if the event is click type and if the click did
*not ocurr in any if the columns with no names, because those belong to the buttons.
* 
* @param {any} event This is the event that triggered on the table
*/
  onSelect(event: any) {
    console.log(event);
    if (event.type === 'click' && !(event.column.name ==='')){
      this.notifyTarea.emit(event.row);
    }
  }

  /**
* 
* @param {NgbModal} modalService Allows to open the modal
* @param {TareaService} tareaService it calls our tareaservice thus we can use its methods
* @param {Router} router we are using this service for navigating purposes
*/
  constructor(private modalService: NgbModal, private tareaService: TareaService, private router: Router) { }
 
  /**
* 
* Initializes the list of tareas either from the localstorage or from the mock
*/
  ngOnInit() {
    console.log(`OnInit`);
    //this.tareas = this.tareaService.getTareas();
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
      this.temp= tareas;
      this.rows = tareas;
    });
  }

    /**
* It receives a tarea and calls the delete method from our function with the tarea ID.
* The tarea is deleted and the list is refreshed.
*
* @param {TareaId} tarea Recieves the tarea that needs to be deleted.
*/
  onDelete(tarea: TareaId) {
    
    this.obTareaService = this.tareaService.deteleTareaHttp(tarea.id).subscribe(() => {
    });
    //this.tareas = this.tareaService.getTareas();
    this.obTareaService = this.tareaService.getTareasHttp().subscribe((tareas: TareaId[]) => {
      this.tareas = tareas;
    });
  }

      /**
*It redirects the browser to the printing URL, sending along the tarea id number
*
* @param {TareaId} tarea Recieves the tarea that needs to be printed.
*/
  print(tarea: TareaId) {
    console.log(tarea.id);
    this.router.navigate([`tarea/print/${tarea.id}`]);
  }
 
  /**
   * Modal that opens and displays a message, if the user agrees it calls the delete method
   * for the corresponding tarea
   * @param content The content of the modal
   * @param {TareaId} tarea The slected tarea that may be deleted
   */
  open(content, tarea:TareaId) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.onDelete(tarea);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  /**
   * For modal dismissing purposes
   * @param reason 
   */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
