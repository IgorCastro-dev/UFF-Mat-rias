import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { Topico } from 'src/app/model/topico';
import { TopicoService } from 'src/app/services/topico/topico.service';

@Component({
  selector: 'app-lista-topicos-edit',
  templateUrl: './lista-topicos-edit.component.html',
  styleUrl: './lista-topicos-edit.component.scss'
})
export class ListaTopicosEditComponent {
  @Input() topicos: Observable<Topico[]> = new Observable<Topico[]>();
  dataSource: MatTableDataSource<Topico> = new MatTableDataSource<Topico>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private topicoService: TopicoService,private cdRef: ChangeDetectorRef) {}

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
}
