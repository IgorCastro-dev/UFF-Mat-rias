import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conteudo } from 'src/app/model/conteudo';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {

  private apiUrl = "http://localhost:8080/v1/api/uff-materias/conteudo";

  constructor(private http:HttpClient ) {}

  public getConteudos(topicoId:number):Observable<Conteudo[]>{
    return this.http.get<Conteudo[]>(`${this.apiUrl}/${topicoId}`);
  }

  dowloadConteudo(fileNome: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/octet-stream' // Indica que estamos esperando uma resposta de octet-stream
    });

    return this.http.get(`${this.apiUrl}/dowload/${fileNome}`, { headers: headers, responseType: 'blob' });
  }
}
