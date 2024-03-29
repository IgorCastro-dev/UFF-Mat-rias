import { ConteudoService } from 'src/app/services/conteudo/conteudo.service';
import { ChangeDetectorRef, Component,Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { Conteudo } from 'src/app/model/conteudo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-conteudo-edit',
  templateUrl: './lista-conteudo-edit.component.html',
  styleUrl: './lista-conteudo-edit.component.scss'
})
export class ListaConteudoEditComponent {
  @Input() conteudos!: Conteudo[];
  @Input() topicoId!: number;
  dataSource: MatTableDataSource<Conteudo> = new MatTableDataSource<Conteudo>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor(private conteudoService:ConteudoService,private cdRef: ChangeDetectorRef,private router: Router) {}

  ngAfterViewInit() {
      this.dataSource = new MatTableDataSource(this.conteudos);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cdRef.detectChanges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  abrirNovaJanela(url: string): void {
    const novaJanela = window.open(url, '_blank');
    if (novaJanela) {
      novaJanela.focus();
    } else {
      console.error('Falha ao abrir nova janela.');
    }
  }

  fazerDowload(fileNome: string) {
    this.showSpinner$.next(true);
    this.conteudoService.dowloadConteudo(fileNome).subscribe((blob: Blob) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      // Extraia o nome do arquivo da URL
      const fileName = fileNome || 'download';
      link.setAttribute('download', fileName);

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revogue a URL do objeto
      window.URL.revokeObjectURL(url);
      this.showSpinner$.next(false);
    });
  }

  deletaConteudo(fileNome: string){
    this.conteudoService.deleteConteudo(fileNome).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter(file => file.nome !== fileNome);
    })
  }

  goToAtualizaConteudo(conteudoId: number){
    this.router.navigate([`conteudo-edit/${this.topicoId}/atualiza-conteudo/${conteudoId}`]);
  }

  goToSalvarConteudo(){
    this.router.navigate([`conteudo-edit/salva-conteudo/${this.topicoId}`]);
  }
}
