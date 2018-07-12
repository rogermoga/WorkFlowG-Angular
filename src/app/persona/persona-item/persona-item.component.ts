import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonaService } from '../shared/persona.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PersonaId} from '../shared/persona-id';
import { Persona } from '../shared/persona';


@Component({
  selector: 'wfg-persona-item',
  templateUrl: './persona-item.component.html',
  styles: []
})
export class PersonaItemComponent implements OnInit {

  @Input() persona: PersonaId;
 
  @Output() notify: EventEmitter<Persona> = new EventEmitter<Persona>();
  personaForm : FormGroup;

  constructor(private personaService: PersonaService) {
    console.log('Constructor de persona-item');
    this.personaForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('',Validators.required),
      fechaNacimiento: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
    });
}

ngOnInit() {
    console.log('Init de persona-item');
}

ngOnChanges(){
    console.log('Change de persona-item');
    if(this.persona && this.persona.id){
      let controls = this.personaForm.controls;
      controls['nombre'].setValue(this.persona.nombre);
      controls['apellido'].setValue(this.persona.apellido);
      controls['fechaNacimiento'].setValue(this.persona.fechaNacimiento);
      controls['email'].setValue(this.persona.email);
    }
}

onSuccess() {
  console.log(this.persona);
  let controls = this.personaForm.controls;
  const personaSave: Persona = {
    nombre: controls['nombre'].value,
    apellido: controls['apellido'].value,
    fechaNacimiento: controls['fechaNacimiento'].value,
    email: controls['email'].value
  };

  if (this.persona && this.persona.id) {
    this.personaService.updatePersonaHttp(this.persona.id, personaSave).subscribe((personas: Persona[]) => {
      this.notify.emit(this.persona);
    });
  } else {
    this.personaService.insertarPersonaHttp(personaSave).subscribe((personas: Persona[]) => {
      this.notify.emit(this.persona);
    });
  }
}

}
