
import { Persona } from '../shared/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaId } from '../shared/persona-id';
import {PersonaService} from '../shared/persona.service';
import { Router } from '@angular/router';
/**
 * This component is in charge of the list of personas
 */
@Component({
  selector: 'wfg-persona-list',
  templateUrl: './persona-list.component.html',
  styles: []
})
export class PersonaListComponent implements OnInit {

  obPersonaService : any;
  /**
   * The list of personas
   */
  @Input() personas: Persona[];
  /**
   * A single persona
   */
  @Input() persona: PersonaId;
  /**
   * The persona that we are sending out
   */
  @Output() notifyTarea: EventEmitter<PersonaId> = new EventEmitter<PersonaId>();

  //  personas: Persona[] = [
  //   {nombre: "Pepito", apellido: "de los Palotes", fechaNacimiento: "5 de Enero", 
  //       email: "pepitopalotes@gmail.com"},

  //   {nombre: "Benito", apellido: "Camela", fechaNacimiento: "28 diciembre", 
  //       email: "benitocamela@gmail.com"},

  //  {nombre: "Pablo", apellido: "Escobar", fechaNacimiento: "6 de Junio de 2046", 
  //       email: "escobarpablin@gmail.com"}
  // ];

  constructor(private personaService : PersonaService, private router: Router) { }
/**
* 
* Initializes the list of tareas from the localstorage
*/
  ngOnInit() {
    console.log(`OnInit`);
    //this.personas = this.PersonaService.getPersonas();
    this.obPersonaService = this.personaService.getPersonasHttp().subscribe((personas: PersonaId[]) => {
      this.personas = personas;
    });
    
  }
   /**
* It receives a persona and calls the delete method from our function with the persona ID.
* The persona is deleted and the list is refreshed.
*
* @param {PersonaId} persona Recieves the persona that needs to be deleted.
*/
  onDelete(persona: PersonaId) {
    this.obPersonaService = this.personaService.detelePersonaHttp(persona.id).subscribe(() => {
    });
    this.obPersonaService = this.personaService.getPersonasHttp().subscribe((personas: PersonaId[]) => {
      this.personas = personas;
    });
    
  }
      /**
*It redirects the browser to the printing URL, sending along the persona id number
*
* @param {PersonaId} persona Recieves the persona that needs to be printed.
*/
  print(persona: PersonaId){
    console.log(persona.id);
    this.router.navigate([`persona/print/${persona.id}`]);
}

}
