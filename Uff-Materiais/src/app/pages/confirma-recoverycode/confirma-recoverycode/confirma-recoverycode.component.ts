import { Location } from '@angular/common';

import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Codigo } from 'src/app/model/codigo';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-confirma-recoverycode',
  templateUrl: './confirma-recoverycode.component.html',
  styleUrl: './confirma-recoverycode.component.scss'
})
export class ConfirmaRecoverycodeComponent {
  nomeBotao = "Enviar Código";
  emailRecebido!: string;
  codigoDigitado: string[] = ['', '', '', ''];

  constructor(private route: ActivatedRoute,
    private router:Router,
    @Inject(SharedDataService) private sharedDataService:SharedDataService,
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
      this.usuarioService.confirmaRecoveryCode(codigo,this.emailRecebido).subscribe({
        next: () => {
          this.sharedDataService.setMeuDado({email:this.emailRecebido,codigo:codigo})
          this.router.navigate(['update-password']);
        },
        error: (error: any) => {
          this.openError('Erro ao enviar código: '+error.error.detail);
        }
    });
  }
  goBack() {
    this.location.back();
  }
  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
