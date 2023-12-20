import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/model/materia';
import { MateriaService } from 'src/app/services/materia/materia.service';

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
  materias:Observable<Materia[]>
  constructor(private materiaService: MateriaService){
    this.materias = this.materiaService.getMaterias();
  }

}
