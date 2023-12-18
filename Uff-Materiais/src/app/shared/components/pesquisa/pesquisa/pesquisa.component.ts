import { DataSource } from '@angular/cdk/collections';
import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {
  @Input() exemplo: string = "Ex. Qualidade e Teste";
  @Input() label: string = "Matérias";
  dados: any[] = [
    {usuarios_id: 1,
    nome: "João Silva",
    email: "joao@email.com",
    senha: "senha123",
    celular: "123456789"
  },{usuarios_id: 2,
    nome: "João Silva",
    email: "joao@email.com",
    senha: "senha123",
    celular: "123456789"
  }];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.dados);
  filtroAplicado: boolean = false;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.filtroAplicado = true;
  }
  getDataSource(): MatTableDataSource<any> | null {
    return this.filtroAplicado ? this.dataSource : null;
  }
}
