import { UsuarioService } from 'src/app/services/usuario/usuario.service';

import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Usuario } from '../../../model/usuario';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';
import { error } from 'console';

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
  }

  label = "Usuário";
  exemplo = "Gabriel";
  usuarios:Observable<Usuario[]>
  constructor(private usuarioService: UsuarioService,public dialog: MatDialog){
    this.usuarios = this.usuarioService.getUsers().pipe(
      catchError(error => {
        this.openError("Erro ao carregar usuários, tente novamente");
        return of([]);
      })
    );
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
