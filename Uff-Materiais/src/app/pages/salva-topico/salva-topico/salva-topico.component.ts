import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TopicoService } from 'src/app/services/topico/topico.service';

@Component({
  selector: 'app-salva-topico',
  templateUrl: './salva-topico.component.html',
  styleUrl: './salva-topico.component.scss'
})
export class SalvaTopicoComponent {
  formGroup!: FormGroup;
  nomeBotao = "salvar";
  topicoId: number = 3;

  constructor(private fb: FormBuilder,private topicoService:TopicoService,private route: ActivatedRoute,private router: Router){

    this.route.params.subscribe(params => {
      const materiaId = params['topico-id'];
      this.topicoId = materiaId;
    });

    this.formGroup = this.fb.group({
      secaoMateriasNome: ['', Validators.required]
    });
  }

  salvarTopico(){
    if (this.formGroup.valid) {
      const topicoNovo= this.formGroup.value;
      this.topicoService.salvaTopicoPorMateria(this.topicoId,topicoNovo).subscribe({
        next: () => {
          this.router.navigate([`topico-edit/${this.topicoId}`]);
        },
        error: (error) => {
              console.error('Erro ao atualizar usuário:', error);
              // Trate o erro conforme necessário
            }
      });
    }
  }
}
