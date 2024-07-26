import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Topico } from 'src/app/model/topico';

@Injectable({
  providedIn: 'root'
})
export class TopicoService {

  constructor(private http:HttpClient,private cookieService:CookieService ) {}

  private apiUrl = "https://uff-materias-1.onrender.com/v1/api/uff-materias/topicos";
  private token = this.cookieService.get('token');
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  getTopicos(): Observable<Topico[]>{
    return this.http.get<Topico[]>(`${this.apiUrl}`,{ headers: this.headers });
  }

  getTopicosByMateria(materiaId:number): Observable<Topico[]>{
    return this.http.get<Topico[]>(`${this.apiUrl}/materia/${materiaId}`,{ headers: this.headers });
  }

  getTopicoById(topicoId:number): Observable<Topico>{
    return this.http.get<Topico>(`${this.apiUrl}/${topicoId}`,{ headers: this.headers });
  }

  updateTopico(topicoId:number, topicoAtualizado:any){
    const url = `${this.apiUrl}/${topicoId}`;
    return this.http.put(url,topicoAtualizado,{ headers: this.headers });
  }

  salvaTopicoPorMateria(materiId:number, topico:any){
    const url = `${this.apiUrl}/${materiId}`;
    return this.http.post(url,topico,{ headers: this.headers });
  }

  deletaTopicoPorId(topicoId:number){
    return this.http.delete(`${this.apiUrl}/${topicoId}`,{ headers: this.headers });
  }
}
