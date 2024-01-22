import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/model/materia';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  constructor(private http:HttpClient,private cookieService:CookieService ) {}
  private apiUrl = 'http://localhost:8080/v1/api/uff-materias/materias';
  private token = this.cookieService.get('token');
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  salvarMateria(novaMateria:any){
    const url = `${this.apiUrl}`;
    return this.http.post(url,novaMateria,{ headers: this.headers });
  }

  getMaterias(): Observable<Materia[]>{
    return this.http.get<Materia[]>(`${this.apiUrl}`,{ headers: this.headers });
  }

  getMateriaById(materiaId: number):Observable<Materia>{
    return this.http.get<Materia>(`${this.apiUrl}/${materiaId}`,{ headers: this.headers });
  }

  updateMateria(materiaId: number,materiaAtualizada:any){
    const url = `${this.apiUrl}/${materiaId}`;
    return this.http.put(url,materiaAtualizada,{ headers: this.headers });
  }

  deletaMateria(materiaId: number){
    return this.http.delete(`${this.apiUrl}/${materiaId}`,{ headers: this.headers })
  }
}
