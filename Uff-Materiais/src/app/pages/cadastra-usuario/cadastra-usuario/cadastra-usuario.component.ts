import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-cadastra-usuario',
  templateUrl: './cadastra-usuario.component.html',
  styleUrl: './cadastra-usuario.component.scss'
})
export class CadastraUsuarioComponent {
  formGroup: FormGroup;
  hide = true;
  nomeBotao="Cadastrar";
  constructor(private usuarioService: UsuarioService,public dialog: MatDialog,private router: Router,private fb: FormBuilder){

    this.formGroup = this.fb.group({
      nome: ['Nome Exemplo', Validators.required],
      email: ['exemplo@id.uff.com', [Validators.required, Validators.email]],
      celular: ['(99) 9 9999-9999', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  cadastrarUsuario() {
      const usuarioNovo = this.formGroup.value;
      this.usuarioService.postUser(usuarioNovo).subscribe({
        next: () => {
          this.router.navigate(['confirma-code'], { queryParams: { email: usuarioNovo.email } });
        },
        error: (error) => {
          this.openError('Erro ao cadastrar usuário: '+error.error.detail)
        },
      });
  }

  emailFormControl  = new FormControl('', [Validators.required, Validators.email]);

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
