import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Conteudo } from 'src/app/model/conteudo';
import { ConteudoService } from 'src/app/services/conteudo/conteudo.service';

@Component({
  selector: 'app-atualiza-conteudo',
  templateUrl: './atualiza-conteudo.component.html',
  styleUrl: './atualiza-conteudo.component.scss'
})
export class AtualizaConteudoComponent {
  formGroup!: FormGroup;
  nomeBotao = "Atualizar";
  selectedFileName: string = "Nome Arquivo";
  topicoId: number = 3;
  conteudoId: number = 3;
  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor(private fb: FormBuilder,private conteudoService:ConteudoService,
    private route: ActivatedRoute,private router: Router){

    this.route.params.subscribe(params => {
      const conteudoId = params['conteudo-id'];
      const topicoId = params['topico-id'];
      this.conteudoId = conteudoId;
      this.topicoId = topicoId;
    });

    this.formGroup = this.fb.group({
      conteudoDescricao: ['', Validators.required],
      conteudoArquivo: [null, Validators.required],
    });
  }

  ngOnInit(){
    this.conteudoService.getConteudo(this.conteudoId).subscribe((conteudo: Conteudo) => {
      this.formGroup.patchValue({
        conteudoDescricao: conteudo.descricao
      });
      this.selectedFileName = conteudo.nome;
    });
  }

  salvarConteudo() {
      const conteudo = new FormData();
      const arquivoInput = (document.getElementById('fileInput') as HTMLInputElement)?.files?.[0];
      if (arquivoInput) {
        conteudo.append('arquivo', arquivoInput);
      }

      const descricaoInput = this.formGroup.get('conteudoDescricao')?.value;

      if (typeof descricaoInput === 'string') {
        conteudo.append('descricao', descricaoInput);
      }
      this.showSpinner$.next(true);
      this.conteudoService.updateConteudo(this.conteudoId,conteudo,).subscribe({
        next: () => {
          this.showSpinner$.next(false);
          this.router.navigate([`conteudo-edit/${this.topicoId}`]);
        },
        error: (error) => {
          this.showSpinner$.next(false);
          console.error('Erro ao fazer upload do conteúdo:', error);
          // Trate o erro conforme necessário
        }
      });
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
