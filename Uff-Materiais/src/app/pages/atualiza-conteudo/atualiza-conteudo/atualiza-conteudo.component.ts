import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConteudoService } from 'src/app/services/conteudo/conteudo.service';

@Component({
  selector: 'app-atualiza-conteudo',
  templateUrl: './atualiza-conteudo.component.html',
  styleUrl: './atualiza-conteudo.component.scss'
})
export class AtualizaConteudoComponent {
  formGroup!: FormGroup;
  nomeBotao = "salvar";
  topicoId: number = 3;
  selectedFileName: string = "Nome do Arquivo";

  constructor(private fb: FormBuilder,private conteudoService:ConteudoService,
    private route: ActivatedRoute,private router: Router){

    this.route.params.subscribe(params => {
      const topicoId = params['topico-id'];
      this.topicoId = topicoId;
    });

    this.formGroup = this.fb.group({
      conteudoDescricao: ['', Validators.required],
      conteudoArquivo: [null, Validators.required],
    });
  }

  salvarConteudo() {
    if (this.formGroup.valid) {
      const conteudo = new FormData();
      const arquivoInput = (document.getElementById('fileInput') as HTMLInputElement)?.files?.[0];

      if (arquivoInput) {
        conteudo.append('arquivo', arquivoInput);
      }

      const descricaoInput = this.formGroup.get('conteudoDescricao')?.value;

      if (typeof descricaoInput === 'string') {
        conteudo.append('descricao', descricaoInput);
      }

      this.conteudoService.uploadConteudo(conteudo,this.topicoId).subscribe({
        next: () => {
          this.router.navigate([`conteudo-edit/${this.topicoId}`]);
        },
        error: (error) => {
          console.error('Erro ao fazer upload do conteúdo:', error);
          // Trate o erro conforme necessário
        }
      });
    }
  }

  onFileSelected(event: any) {
    const input = event.target;

    if (input.files.length > 0) {
      this.selectedFileName = input.files[0].name;
    } else {
      this.selectedFileName = '';
    }
  }
}
