import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PersonaComponent } from './persona.component';
import { PersonaItemComponent } from './persona-item/persona-item.component';
import { PersonaListComponent } from './persona-list/persona-list.component';
import {PersonaService} from './shared/persona.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import { PersonaPrintComponent } from './persona-print/persona-print.component';
 
@NgModule({
  imports: [
    CommonModule,
    PersonaRoutingModule,
    SharedPipesModule,
    ReactiveFormsModule
  ],
  providers: [PersonaService],
  declarations: [PersonaComponent, PersonaItemComponent, PersonaListComponent, PersonaPrintComponent]
})
export class PersonaModule { }
