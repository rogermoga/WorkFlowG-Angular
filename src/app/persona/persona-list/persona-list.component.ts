
import { Persona } from '../shared/persona';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonaId } from '../shared/persona-id';
import {PersonaService} from '../shared/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wfg-persona-list',
  templateUrl: './persona-list.component.html',
  styles: []
})
export class PersonaListComponent implements OnInit {

  obPersonaService : any;

  @Input() personas: Persona[];
  @Input() persona: PersonaId;
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

  ngOnInit() {
    console.log(`OnInit`);
    //this.personas = this.PersonaService.getPersonas();
    this.obPersonaService = this.personaService.getPersonasHttp().subscribe((personas: PersonaId[]) => {
      this.personas = personas;
    });
    
  }

  onDelete(persona: PersonaId) {
    this.obPersonaService = this.personaService.detelePersonaHttp(persona.id).subscribe(() => {
    });;
  }

  print(persona: PersonaId){
    console.log(persona.id);
    this.router.navigate([`persona/print/${persona.id}`]);
}

}
