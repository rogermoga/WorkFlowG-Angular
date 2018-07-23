import { Component, OnInit, OnDestroy } from '@angular/core';
import { Persona } from '../shared/persona';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../shared/persona.service';

@Component({
  selector: 'wfg-persona-print',
  templateUrl: './persona-print.component.html',
  styleUrls: ['./persona-print.component.css']
})
export class PersonaPrintComponent implements OnInit, OnDestroy {
    /**
   * The data from the persona we want to print
   */
  persona: Persona;
    /**
   * The id of the persona we want to print
   */
  id: string;
   /**
   * A variable we are using in the process
   */
  params: any;
/**
 * 
 * @param PersonaService We inject the personaService to be able to use the http methods
 * @param activatedRoute For routing purposes
 */
  constructor(private PersonaService: PersonaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log("persona print init");
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.PersonaService.getPersonaHttp(this.id).subscribe((persona: Persona) => {
      this.persona = persona;
    });
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }
}
