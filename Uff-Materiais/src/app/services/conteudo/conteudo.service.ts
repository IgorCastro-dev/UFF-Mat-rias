import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conteudo } from 'src/app/model/conteudo';

@Injectable({
  providedIn: 'root'
})
export class ConteudoService {

  constructor(private http:HttpClient,private cookieService:CookieService ) {}

  private apiUrl = "http://localhost:8080/v1/api/uff-materias/conteudo";
  private token = this.cookieService.get('token');
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${this.token}`
  });



  getConteudos(topicoId:number):Observable<Conteudo[]>{



    return this.http.get<Conteudo[]>(`${this.apiUrl}/${topicoId}`,{ headers: this.headers });
  }

  getConteudo(conteudoId: number):Observable<Conteudo>{
    return this.http.get<Conteudo>(`${this.apiUrl}/buscar/${conteudoId}`,{ headers: this.headers });
  }



  dowloadConteudo(fileNome: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/dowload/${fileNome}`, { headers: this.headers, responseType: 'blob' });
  }

  updateConteudo(conteudoId: number,conteudo: FormData){
    return this.http.put(`${this.apiUrl}/${conteudoId}`,conteudo,{ headers: this.headers });
  }

  uploadConteudo(conteudo: FormData,topicoId:number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${topicoId}`, conteudo,{ headers: this.headers });
  }

  deleteConteudo(fileNome: string){
    return this.http.delete(`${this.apiUrl}/${fileNome}`,{ headers: this.headers });
  }
}
