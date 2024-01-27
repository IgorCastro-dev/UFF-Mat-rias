import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/services/materia/materia.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-salva-materia',
  templateUrl: './salva-materia.component.html',
  styleUrl: './salva-materia.component.scss'
})
export class SalvaMateriaComponent {
  formGroup: FormGroup;
  nomeBotao = "salvar";

  constructor(private fb: FormBuilder,public dialog: MatDialog,private materiaService: MateriaService,private router: Router){
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
              this.openError("Erro ao salvar a matéria: "+error.error.detail)
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
