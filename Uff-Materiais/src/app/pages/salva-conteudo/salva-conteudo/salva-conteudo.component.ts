import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ConteudoService } from 'src/app/services/conteudo/conteudo.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-salva-conteudo',
  templateUrl: './salva-conteudo.component.html',
  styleUrl: './salva-conteudo.component.scss'
})
export class SalvaConteudoComponent {
  formGroup!: FormGroup;
  nomeBotao = "salvar";
  topicoId: number = 3;
  selectedFileName: string = "Nome do Arquivo";
  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor(private fb: FormBuilder,private conteudoService:ConteudoService,
    private route: ActivatedRoute,private router: Router,
    public dialog: MatDialog){

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

      this.showSpinner$.next(true);

      this.conteudoService.uploadConteudo(conteudo,this.topicoId).subscribe({
        next: () => {
          this.showSpinner$.next(false);
          this.router.navigate([`conteudo-edit/${this.topicoId}`]);
        },
        error: (error) => {
          this.showSpinner$.next(false);
          this.openError("Erro ao ao fazer upload do conteúdo: "+error.error.detail)
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

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
