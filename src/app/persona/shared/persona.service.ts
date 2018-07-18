import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient } from '@angular/common/http';
import { PersonaId } from './persona-id';
/**
 * @ignore
 */
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
/**
 * 
 * @param {HttpClient} http Is being used for the the http calls 
 */
  constructor(private http: HttpClient) { }

  // getPersonas(){
  //   return PERSONAS;
  // }
/**
   * @returns The personas from the localstorage
   */
  getPersonasHttp() {
    return this.http.get<PersonaId[]>('/api/personas');
  }
/**
 * 
 * @param id The id of the persona to be retrieved
 */
  getPersonaHttp(id: string) {
    return this.http.get(`/api/personas/${id}`);
  }
 /**
 * 
 * @param {persona} persona  the new persona to be added
 * @returns the call to the http post
 */
  insertarPersonaHttp(persona: Persona) {
    return this.http.post<PersonaId[]>(`/api/personas`, persona);
  }
/**
 * 
 * @param {string} id the id of the persona to be updated 
 * @param persona 
 * @returns the http put call
 */
  updatePersonaHttp(id: string, persona: Persona){
    return this.http.put(`/api/personas/${id}`, persona);
  }
/**
 * 
 * @param id the id of the persona to be deleted
 */
  detelePersonaHttp(id: string) {
    return this.http.delete(`/api/personas/${id}`);
  }
  

 
}
 