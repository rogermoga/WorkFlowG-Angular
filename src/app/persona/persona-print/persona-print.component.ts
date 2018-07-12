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
  persona: Persona;
  id: string;
  params: any;

  constructor(private PersonaService: PersonaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.activatedRoute.params.subscribe(params => this.id = params['id']);
    this.PersonaService.getPersonaHttp(this.id).subscribe((persona: Persona) => {
      this.persona = persona;
    });
  }

  ngOnDestroy(){
    this.params.unsubscribe();
  }
}
