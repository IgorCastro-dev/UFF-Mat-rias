import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrl: './usuario-edit.component.scss'
})
export class UsuarioEditComponent {
  label = "Usuário";
  exemplo = "Gabriel"
  usuario :any[] = [
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
  }
  ];

  displayedColumns: string[] = ['usuarios_id', 'nome', 'email', 'celular', 'actions'];

}
