import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from '../../../model/usuario';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrl: './atualiza-usuario.component.scss',
  providers: [provideNgxMask()]
})

export class AtualizaUsuarioComponent {
  formGroup: FormGroup;

  usuarioId!: number;
  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute,private router: Router,private fb: FormBuilder,
    public dialog: MatDialog){
    this.route.params.subscribe(params => {
      const usuarioId = params['id'];
      this.usuarioId = usuarioId;
    });

    this.formGroup = this.fb.group({
      nome: ['Nome Exemplo', Validators.required],
      tipoSelecionado: ['one', Validators.required],
      email: ['exemplo@id.uff.com', [Validators.required, Validators.email]],
      celular: ['(99) 9 9999-9999', [Validators.required]],
    });
  }

  ngOnInit(){
    this.usuarioService.getUserById(this.usuarioId).subscribe((usuario: Usuario) => {
      this.formGroup.patchValue({
        nome: usuario.nome,
        tipoSelecionado: this.verificaTipo(usuario.usuarioTipo),
        email: usuario.email,
        celular: usuario.celular,
      });
    });
  }

  atualizarUsuario() {
    if (this.formGroup.valid) {
      const usuarioAtualizado = this.formGroup.value;
      usuarioAtualizado.usuarioTipo = usuarioAtualizado.tipoSelecionado === 'one' ? 'ADMIN' : 'USER';
      delete usuarioAtualizado.tipoSelecionado;
      this.usuarioService.updateUser(this.usuarioId, usuarioAtualizado).subscribe({
        next: () => {
          this.router.navigate(['usuario-edit']);
        },
        error: (error) => {
          this.openError('Erro ao atualizar usuario: '+ error.error.detail)
        },
      });
    }
  }

  nomeBotao = "atualizar";
  emailFormControl  = new FormControl('', [Validators.required, Validators.email]);

  verificaTipo(tipo: string): string {
    return tipo.toLowerCase() === 'admin' ? 'one' : 'two';
  }
  getErrorMessage() {
    if (this.emailFormControl .hasError('required')) {
      return 'You must enter a value';
    }
    return this.emailFormControl .hasError('email') ? 'Not a valid email' : '';
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
