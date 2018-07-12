import { Injectable } from '@angular/core';
import { Persona } from './persona';
import { HttpClient } from '@angular/common/http';
import { PersonaId } from './persona-id';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  // getPersonas(){
  //   return PERSONAS;
  // }

  getPersonasHttp() {
    return this.http.get<PersonaId[]>('/api/personas');
  }

  getPersonaHttp(id: string) {
    return this.http.get(`/api/personas/${id}`);
  }
 
  insertarPersonaHttp(persona: Persona) {
    return this.http.post<PersonaId[]>(`/api/personas`, persona);
  }

  updatePersonaHttp(id: string, persona: Persona){
    return this.http.put(`/api/personas/${id}`, persona);
  }

  detelePersonaHttp(id: string) {
    return this.http.delete(`/api/personas/${id}`);
  }
  

 
}
 