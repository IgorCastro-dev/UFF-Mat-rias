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

  getConteudos(topicoId:number):Observable<Conteudo[]>{
    return this.http.get<Conteudo[]>(`${this.apiUrl}/${topicoId}`);
  }

  getConteudo(fileNome: string):Observable<Conteudo>{
    return this.http.get<Conteudo>(`${this.apiUrl}/buscar/${fileNome}`);
  }


  dowloadConteudo(fileNome: string): Observable<Blob> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/octet-stream'
    });

    return this.http.get(`${this.apiUrl}/dowload/${fileNome}`, { headers: headers, responseType: 'blob' });
  }

  uploadConteudo(conteudo: FormData,topicoId:number): Observable<any> {

    return this.http.post(`${this.apiUrl}/${topicoId}`, conteudo);
  }
}
