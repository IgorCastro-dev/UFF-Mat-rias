import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from '../../../model/usuario';

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss']
})
export class UsuarioEditComponent {
  totalCount = 100;
  pageSize = 10;
  siblingCount = 1;
  currentPage = 1;

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    // Lógica adicional para carregar os itens da nova página
  }

  label = "Usuário";
  exemplo = "Gabriel";
  usuarios:Observable<Usuario[]>
  constructor(private usuarioService: UsuarioService){
    this.usuarios = this.usuarioService.getUsers();
  }

}
