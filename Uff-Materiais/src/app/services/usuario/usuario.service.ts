import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient,private cookieService:CookieService ) {}

  private apiUrl = 'http://localhost:8080/v1/api/uff-materias/usuarios';

  private token = this.cookieService.get('token');
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}`,{ headers: this.headers }).pipe(
      map((usuarios)=>{
        return usuarios.map((usuario)=>this.formatarUsuario(usuario))
      })
    );
  }
  getUserById(usuarioId: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/${usuarioId}`,{ headers: this.headers }).pipe(
      map((usuario: Usuario) => this.formatarUsuario(usuario))
    );
  }

  deleteUsuario(usuarioId: number){
    const url = `${this.apiUrl}/${usuarioId}`;
    return this.http.delete<Usuario>(url,{ headers: this.headers });
  }

  updateUser(usuarioId: number, usuarioAtualizado:any){
    const url = `${this.apiUrl}/${usuarioId}`;
    return this.http.put(url,usuarioAtualizado,{ headers: this.headers });
  }

  private formatarUsuario(usuario: any): Usuario {
    return {
      usuarios_id: usuario.usuariosId,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      celular: usuario.celular,
      usuarioTipo: usuario.usuarioTipo.nome,
    };
  }
}
