import { Observable } from 'rxjs';
import { Component, Input, ViewChild , OnInit, ChangeDetectorRef} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-tabela-user-edit',
  templateUrl: './tabela-user-edit.component.html',
  styleUrl: './tabela-user-edit.component.scss'
})
export class TabelaUserEditComponent {
  @Input() users: Observable<Usuario[]> = new Observable<Usuario[]>();
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuarioService: UsuarioService,private cdRef: ChangeDetectorRef  ) {}

  ngAfterViewInit() {
    this.users.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cdRef.detectChanges();
    });
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
