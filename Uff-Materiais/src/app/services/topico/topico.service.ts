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
}
