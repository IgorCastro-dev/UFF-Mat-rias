import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-lista-materias-edit',
  templateUrl: './lista-materias-edit.component.html',
  styleUrl: './lista-materias-edit.component.scss'
})
export class ListaMateriasEditComponent {
  @Input() users: Observable<Usuario[]> = new Observable<Usuario[]>();
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuarioService: UsuarioService,private cdRef: ChangeDetectorRef,private router: Router) {

  }
  // this.users.subscribe(data => {console.log(data)})

  ngAfterViewInit() {
    this.users.subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cdRef.detectChanges();
    });
  }

  navegarParaAtualizaUsuario(usuarioId: number) {
    this.router.navigate(['atualiza-usuario', usuarioId]);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteUsuario(usuarioId: number) {
    this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(user => user.usuarios_id !== usuarioId);
    });
  }
}
