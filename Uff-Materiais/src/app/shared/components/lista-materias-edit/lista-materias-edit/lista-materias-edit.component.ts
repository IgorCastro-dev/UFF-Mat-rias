import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Materia } from 'src/app/model/materia';
import { MateriaService } from 'src/app/services/materia/materia.service';

@Component({
  selector: 'app-lista-materias-edit',
  templateUrl: './lista-materias-edit.component.html',
  styleUrl: './lista-materias-edit.component.scss'
})
export class ListaMateriasEditComponent {
  @Input() materias: Observable<Materia[]> = new Observable<Materia[]>();
  dataSource: MatTableDataSource<Materia> = new MatTableDataSource<Materia>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private materiaService: MateriaService,private cdRef: ChangeDetectorRef,private router: Router) {

  }

  ngAfterViewInit() {
    this.materias.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cdRef.detectChanges();
    });
  }

  navegarParaAtualizaMateria(materiaId: number) {
    this.router.navigate(['atualiza-materia', materiaId]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // deleteUsuario(usuarioId: number) {
  //   this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {
  //     this.dataSource.data = this.dataSource.data.filter(user => user.usuarios_id !== usuarioId);
  //   });
  // }
}
