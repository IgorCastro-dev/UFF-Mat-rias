import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia/materia.service';

@Component({
  selector: 'app-salva-materia',
  templateUrl: './salva-materia.component.html',
  styleUrl: './salva-materia.component.scss'
})
export class SalvaMateriaComponent {
  formGroup: FormGroup;
  nomeBotao = "salvar";

  constructor(private fb: FormBuilder,private materiaService: MateriaService,private router: Router){
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      codigo: ['', Validators.required]
    });
  }

  salvarMateria(){
    if (this.formGroup.valid) {
      const materiaNova = this.formGroup.value;
      this.materiaService.salvarMateria(materiaNova).subscribe({
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
