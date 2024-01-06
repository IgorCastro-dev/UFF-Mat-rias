import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conteudo } from 'src/app/model/conteudo';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {

  private apiUrl = "http://localhost:8080/v1/api/uff-materias/conteudo";

  constructor(private http:HttpClient ) {}

  public getConteudos(topicoId:number){
    return this.http.get<Conteudo[]>(`${this.apiUrl}/${topicoId}`);
  }
}
