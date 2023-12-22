import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Materia } from 'src/app/model/materia';
import { MateriaService } from 'src/app/services/materia/materia.service';

@Component({
  selector: 'app-atualiza-materia',
  templateUrl: './atualiza-materia.component.html',
  styleUrl: './atualiza-materia.component.scss'
})
export class AtualizaMateriaComponent {
  formGroup: FormGroup;
  nomeBotao = "atualizar";
  materiaId: number = 3;

  constructor(private fb: FormBuilder,private materiaService: MateriaService,private route: ActivatedRoute,private router: Router){

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
              console.error('Erro ao atualizar usuário:', error);
              // Trate o erro conforme necessário
            }
      });
    }
  }

}
