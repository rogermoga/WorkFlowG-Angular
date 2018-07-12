import { Injectable } from '@angular/core';
import { TAREAS } from './mock-tarea';
import { HttpClient } from '@angular/common/http';
import { Tarea } from './tarea';
import { TareaId } from './tarea-id';


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  constructor(private http: HttpClient) { }

  getTareas() {
    return TAREAS;
  }

  getTareasHttp() {
    return this.http.get<TareaId[]>('/api/tareas');
  }

  insertarTareaHttp(tarea: Tarea) {
    return this.http.post<TareaId[]>(`/api/tareas`, tarea);
  }

  updateTareaHttp(id: string, tarea: Tarea) {
    return this.http.put(`/api/tareas/${id}`, tarea);
  }

  deteleTareaHttp(id: string) {
    return this.http.delete(`/api/tareas/${id}`);
  }

  getTareaHttp(id: string) {
    return this.http.get(`/api/tareas/${id}`);
  }
}

