import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaRoutingModule } from './tarea-routing.module';
import { TareaComponent } from './tarea.component';
import { TareaListComponent } from './tarea-list/tarea-list.component';
import { TareaItemComponent } from './tarea-item/tarea-item.component';
import { TareaService } from 'src/app/tarea/shared/tarea.service';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module';
import {ReactiveFormsModule} from '@angular/forms';
import { TareaPrintComponent } from './tarea-print/tarea-print.component';

@NgModule({
  imports: [
    CommonModule,
    TareaRoutingModule,
    SharedPipesModule,
    ReactiveFormsModule
  ],
  providers: [TareaService],
  declarations: [TareaComponent, TareaListComponent, TareaItemComponent, TareaPrintComponent]
})
export class TareaModule { }
