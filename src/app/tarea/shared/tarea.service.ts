import { Injectable } from '@angular/core';
import { TAREAS } from './mock-tarea';
import { HttpClient } from '@angular/common/http';
import { Tarea } from './tarea';
import { TareaId } from './tarea-id';

/**
 * @ignore
 */
@Injectable({
  providedIn: 'root'
})
export class TareaService {
/**
 * 
 * @param {HttpClient} http Is being used for the the http calls 
 */
  constructor(private http: HttpClient) { }
/**
 * @returns The tareas from the mock. This method is never being called in the final version
 */
  getTareas() {
    return TAREAS;
  }

  /**
   * @returns The tareas from the localstorage
   */
  getTareasHttp() {
    return this.http.get<TareaId[]>('/api/tareas');
  }
/**
 * 
 * @param {Tarea} tarea  the new tarea to be added
 * @returns the call to the http post
 */
  insertarTareaHttp(tarea: Tarea) {
    return this.http.post<TareaId[]>(`/api/tareas`, tarea);
  }
/**
 * 
 * @param {string} id the id of the tarea to be updated 
 * @param tarea 
 * @returns the http put call
 */
  updateTareaHttp(id: string, tarea: Tarea) {
    return this.http.put(`/api/tareas/${id}`, tarea);
  }
/**
 * 
 * @param id the id of the tarea to be deleted
 */
  deteleTareaHttp(id: string) {
    return this.http.delete(`/api/tareas/${id}`);
  }
/**
 * 
 * @param id The id of the tarea to be retrieved
 */
  getTareaHttp(id: string) {
    return this.http.get(`/api/tareas/${id}`);
  }
}

