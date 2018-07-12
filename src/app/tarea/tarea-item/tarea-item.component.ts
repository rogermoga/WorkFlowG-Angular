import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Tarea } from 'src/app/tarea/shared/tarea';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TareaService } from '../shared/tarea.service';
import { TareaId } from '../shared/tarea-id';
import { fechaValidator } from '../../shared/validators/fechaValidator';

@Component({
  selector: 'wfg-tarea-item',
  templateUrl: './tarea-item.component.html',
  styles: []
})
export class TareaItemComponent implements OnInit {

  @Input() tarea: TareaId;
  @Output() notify: EventEmitter<Tarea> = new EventEmitter<Tarea>();
  tareaForm: FormGroup;
  estados = [
    { label: "Desarrollo", value: "DES" },
    { label: "Produccion", value: "PRO" }
  ]

  constructor(private tareaService: TareaService) {
    console.log('Constructor de tarea-item');
    this.tareaForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      aplicacion: new FormControl('', Validators.required),
      tipo: new FormControl(''),
      estadoTarea: new FormControl(''),
      fechaAlta: new FormControl('', fechaValidator),
      usuario: new FormControl(''),
      despliegue: new FormControl('')
    });
  }

  ngOnInit() {
    console.log('Init de tarea-item');
  }

  ngOnChanges() {
    console.log('Change de tarea-item');
    if (this.tarea && this.tarea.id) {
      let controls = this.tareaForm.controls;
      controls['codigo'].setValue(this.tarea.codigo);
      controls['descripcion'].setValue(this.tarea.descripcion);
      controls['aplicacion'].setValue(this.tarea.aplicacion);
      controls['tipo'].setValue(this.tarea.tipo);
      controls['estadoTarea'].setValue(this.tarea.estado);
      controls['fechaAlta'].setValue(this.tarea.fechaAlta);
      controls['usuario'].setValue(this.tarea.usuario);
      controls['despliegue'].setValue(this.tarea.despliegue);
    }
  }

  onSuccess() {

    this.markFormGroupTouched(this.tareaForm);
    console.log("all fields have been touched");
    console.log(this.tarea);
    let controls = this.tareaForm.controls;
    const tareaSave: Tarea = {
      codigo: controls['codigo'].value,
      descripcion: controls['descripcion'].value,
      aplicacion: controls['aplicacion'].value,
      tipo: controls['tipo'].value,
      estado: controls['estadoTarea'].value,
      fechaAlta: controls['fechaAlta'].value,
      usuario: controls['usuario'].value,
      despliegue: controls['despliegue'].value
    };

    if (this.tarea && this.tarea.id) {
      this.tareaService.updateTareaHttp(this.tarea.id, tareaSave).subscribe((tareas: Tarea[]) => {
        this.notify.emit(this.tarea);
      });
    } else {
      this.tareaService.insertarTareaHttp(tareaSave).subscribe((tareas: Tarea[]) => {
        this.notify.emit(this.tarea);
      });
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {

    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }
}
