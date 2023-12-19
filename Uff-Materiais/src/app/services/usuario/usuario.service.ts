import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/v1/api/uff-materias/usuarios';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.apiUrl}`).pipe(
      map((usuarios)=>{
        return usuarios.map((usuario)=>this.formatarUsuario(usuario))
      })
    );
  }
  getUserById(usuarioId: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.apiUrl}/${usuarioId}`).pipe(
      map((usuario: Usuario) => this.formatarUsuario(usuario))
    );
  }

  deleteUsuario(usuarioId: number){
    const url = `${this.apiUrl}/${usuarioId}`;
    return this.http.delete<Usuario>(url);
  }

  updateUser(usuarioId: number, usuarioAtualizado:any){
    const url = `${this.apiUrl}/${usuarioId}`;
    return this.http.put(url,usuarioAtualizado);
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
