import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Topico } from 'src/app/model/topico';

@Component({
  selector: 'app-lista-topicos-edit',
  templateUrl: './lista-topicos-edit.component.html',
  styleUrl: './lista-topicos-edit.component.scss'
})
export class ListaTopicosEditComponent {
  @Input() topicos: Observable<Topico[]> = new Observable<Topico[]>();
  @Input() materiaId!: number;
  dataSource: MatTableDataSource<Topico> = new MatTableDataSource<Topico>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdRef: ChangeDetectorRef,private router: Router) {}

  ngAfterViewInit() {
    this.topicos.subscribe(data => {
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

  goToAtualizaTopico(topicoId:number){
    this.router.navigate([`topico-edit/${this.materiaId}/atualiza-topico/${topicoId}`]);
  }

  goToSalvarTopico(){
    this.router.navigate([`topico-edit/salva-topico/${this.materiaId}`]);
  }
}
