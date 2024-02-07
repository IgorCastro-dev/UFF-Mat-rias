import { Location } from '@angular/common';
import { Codigo } from './../../../model/codigo';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/components/success-dialog/success-dialog/success-dialog.component';

@Component({
  selector: 'app-confirma-code',
  templateUrl: './confirma-code.component.html',
  styleUrl: './confirma-code.component.scss'
})
export class ConfirmaCodeComponent {
  nomeBotao = "Enviar Código";
  emailRecebido!: string;
  codigoDigitado: string[] = ['', '', '', ''];

  constructor(private route: ActivatedRoute,
    private usuarioService:UsuarioService,
    public dialog: MatDialog,
    private location:Location) {}

  ngOnInit() {
    // Capturar o email da URL
    this.route.queryParams.subscribe((params) => {
      this.emailRecebido = params['email'];
    });
  }

  enviarCodigo() {
    const codigoCompleto = this.codigoDigitado.join('');
      const codigo: Codigo = {code:codigoCompleto};
      // Agora você pode enviar `codigoCompleto` para a sua API usando seu serviço
      this.usuarioService.enviarRegisterCode(codigo,this.emailRecebido).subscribe({
        next: () => {
          console.log('Código enviado com sucesso!');
          this.openSuccess('Usuário salvo com sucesso, pode voltar ao login')
        },
        error: (error) => {
          this.openError('Erro ao enviar código: '+ error.error.detail)
        }
    });
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  goBack() {
    this.location.back();
  }

  openSuccess(successMsg:string) {
    this.dialog.open(SuccessDialogComponent, {
      data: successMsg
    });
  }
}
