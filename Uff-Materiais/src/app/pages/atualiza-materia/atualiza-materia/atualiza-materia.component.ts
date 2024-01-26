import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/model/materia';
import { MateriaService } from 'src/app/services/materia/materia.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-atualiza-materia',
  templateUrl: './atualiza-materia.component.html',
  styleUrl: './atualiza-materia.component.scss'
})
export class AtualizaMateriaComponent {
  formGroup: FormGroup;
  nomeBotao = "atualizar";
  materiaId: number = 3;

  constructor(private fb: FormBuilder,
    private materiaService: MateriaService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog){

    this.route.params.subscribe(params => {
      const materiaId = params['id'];
      this.materiaId = materiaId;
    });

    this.formGroup = this.fb.group({
      nome: ['Matéria Exemplo', Validators.required],
      codigo: ['TCC00333', Validators.required]
    });
  }

  ngOnInit(){
    this.materiaService.getMateriaById(this.materiaId).subscribe((materia: Materia) => {
      this.formGroup.patchValue({
        nome: materia.nomeMateria,
        codigo: materia.codigo
      });
    });
  }

  atualizarMateria(){
    if (this.formGroup.valid) {
      const materiaAtualizada = this.formGroup.value;
      this.materiaService.updateMateria(this.materiaId,materiaAtualizada).subscribe({
        next: () => {
          this.router.navigate(['materias-edit']);
        },
        error: (error) => {
              this.openError("Erro ao atualizar matéria: "+error.error.detail)
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
