import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Topico } from 'src/app/model/topico';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  private apiUrl = "http://localhost:8080/v1/api/uff-materias/topicos";

  constructor(private http:HttpClient) {}

  getTopicos(): Observable<Topico[]>{
    return this.http.get<Topico[]>(`${this.apiUrl}`);
  }

  getTopicosByMateria(materiaId:number): Observable<Topico[]>{
    return this.http.get<Topico[]>(`${this.apiUrl}/materia/${materiaId}`);
  }

  getTopicoById(topicoId:number): Observable<Topico>{
    return this.http.get<Topico>(`${this.apiUrl}/${topicoId}`);
  }

  updateTopico(topicoId:number, topicoAtualizado:any){
    const url = `${this.apiUrl}/${topicoId}`;
    return this.http.put(url,topicoAtualizado);
  }
}
