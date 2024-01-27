import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Topico } from 'src/app/model/topico';
import { TopicoService } from 'src/app/services/topico/topico.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-atualiza-topico',
  templateUrl: './atualiza-topico.component.html',
  styleUrl: './atualiza-topico.component.scss'
})
export class AtualizaTopicoComponent {
  formGroup: FormGroup;
  nomeBotao = "atualizar";
  topicoId: number = 3;
  materiaId: number = 3;

  constructor(private fb: FormBuilder,
    private topicoService:TopicoService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog){

    this.route.params.subscribe(params => {
      const topicoId = params['topico-id'];
      const materiaId = params['materia-id'];
      this.topicoId = topicoId;
      this.materiaId = materiaId;
    });

    this.formGroup = this.fb.group({
      secaoMateriasNome: ['Tópico Exemplo', Validators.required]
    });
  }

  ngOnInit(){
    this.topicoService.getTopicoById(this.topicoId).subscribe((topico: Topico) => {
      this.formGroup.patchValue({
        secaoMateriasNome: topico.secaoMateriasNome
      });
    });
  }

  atualizarTopico(){
    if (this.formGroup.valid) {
      const topicoAtualizado = this.formGroup.value;
      this.topicoService.updateTopico(this.topicoId,topicoAtualizado).subscribe({
        next: () => {
          this.router.navigate([`topico-edit/${this.materiaId}`]);
        },
        error: (error) => {
              this.openError('Erro ao atualizar tópico: '+ error.error.detail)
            }
      });
    }
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
