import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/pages/model/usuario';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  private formatarUsuario(usuario: any): Usuario {
    return {
      usuarios_id: usuario.usuariosId,
      nome: usuario.nome,
      email: usuario.email,
      senha: usuario.senha,
      celular: usuario.celular,
      usuario_tipo: usuario.usuarioTipo.nome,
    };
  }
}
