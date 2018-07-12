import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '', loadChildren: './tarea/tarea.module#TareaModule' },
{ path: 'personas', loadChildren: './persona/persona.module#PersonaModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
