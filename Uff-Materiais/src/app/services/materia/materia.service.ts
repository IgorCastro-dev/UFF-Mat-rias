import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/model/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private apiUrl = 'http://localhost:8080/v1/api/uff-materias/materias';

  constructor(private http:HttpClient) { }

  salvarMateria(novaMateria:any){
    const url = `${this.apiUrl}`;
    return this.http.post(url,novaMateria);
  }

  getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(`${this.apiUrl}`);
  }

  getMateriaById(materiaId: number):Observable<Materia>{
    return this.http.get<Materia>(`${this.apiUrl}/${materiaId}`);
  }

  updateMateria(materiaId: number,materiaAtualizada:any){
    const url = `${this.apiUrl}/${materiaId}`;
    return this.http.put(url,materiaAtualizada);
  }

  deletaMateria(materiaId: number){
    return this.http.delete(`${this.apiUrl}/${materiaId}`)
  }
}
