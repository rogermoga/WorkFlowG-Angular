import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoTareaPipe } from './estado-tarea.pipe';
import { EstadoEmailPipe } from './estado-email.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EstadoTareaPipe, EstadoEmailPipe],
  exports: [EstadoTareaPipe, EstadoEmailPipe]
})
export class SharedPipesModule { }
