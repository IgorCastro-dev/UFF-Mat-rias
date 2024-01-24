import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Codigo } from 'src/app/model/codigo';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-confirma-recoverycode',
  templateUrl: './confirma-recoverycode.component.html',
  styleUrl: './confirma-recoverycode.component.scss'
})
export class ConfirmaRecoverycodeComponent {
  nomeBotao = "Enviar Código";
  emailRecebido!: string;
  codigoDigitado: string[] = ['', '', '', ''];

  constructor(private route: ActivatedRoute,private usuarioService:UsuarioService) {}

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
          console.log('Código enviado com sucesso!');
          // Adicione qualquer lógica adicional conforme necessário
        },
        error: (error: any) => {
          console.error('Erro ao enviar código:', error);
          // Trate o erro conforme necessário
        }
    });
  }
}
