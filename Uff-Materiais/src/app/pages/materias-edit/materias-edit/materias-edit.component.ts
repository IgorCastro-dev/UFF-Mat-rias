import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-materias-edit',
  templateUrl: './materias-edit.component.html',
  styleUrl: './materias-edit.component.scss'
})
export class MateriasEditComponent {
  totalCount = 100;
  pageSize = 10;
  siblingCount = 1;
  currentPage = 1;

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
  }

  label = "Usuário";
  exemplo = "Gabriel";
  usuarios:Observable<Usuario[]>
  constructor(private usuarioService: UsuarioService){
    this.usuarios = this.usuarioService.getUsers();
  }

}
