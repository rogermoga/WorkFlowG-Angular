import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonaService } from '../shared/persona.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PersonaId} from '../shared/persona-id';
import { Persona } from '../shared/persona';

/**
 * This component displays the form to add and modify existing personas
 */
@Component({
  selector: 'wfg-persona-item',
  templateUrl: './persona-item.component.html',
  styles: []
})
export class PersonaItemComponent implements OnInit {
  /**
   * The persona that is being sent from the list to edit the fields
   */
  @Input() persona: PersonaId;
 /**
   * The persona we are sending back to the list
   */
  @Output() notify: EventEmitter<Persona> = new EventEmitter<Persona>();
  personaForm : FormGroup;
/**
 * The form gets initialized
 * @param {PersonaService} personaService 
 */
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
/**
 * detects the changes on the fields
 */
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
/**
 * reads the value of the fields and saves them into a variable.
 * If there is an existing Id it calls the method to update the persona, if its not 
 * it creates the method to insert a new persona.
 */
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
