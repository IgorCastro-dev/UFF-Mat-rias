import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, catchError, delay, of } from 'rxjs';
import { Materia } from 'src/app/model/materia';
import { MateriaService } from 'src/app/services/materia/materia.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

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
  materias$:Observable<Materia[]>
  nome = localStorage.getItem("usuario");
  constructor(private materiaService: MateriaService,public dialog: MatDialog){
    this.materias$ = this.materiaService.getMaterias().pipe(
      catchError(error => {
        this.openError("Erro ao carregar as matérias, tente novamente")
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
