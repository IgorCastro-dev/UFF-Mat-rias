import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Topico } from 'src/app/model/topico';
import { TopicoService } from 'src/app/services/topico/topico.service';

@Component({
  selector: 'app-atualiza-topico',
  templateUrl: './atualiza-topico.component.html',
  styleUrl: './atualiza-topico.component.scss'
})
export class AtualizaTopicoComponent {
  formGroup: FormGroup;
  nomeBotao = "atualizar";
  topicoId: number = 3;

  constructor(private fb: FormBuilder,private topicoService:TopicoService,private route: ActivatedRoute,private router: Router){

    this.route.params.subscribe(params => {
      const topicoId = params['id'];
      this.topicoId = topicoId;
    });

    this.formGroup = this.fb.group({
      nome: ['Tópico Exemplo', Validators.required]
    });
  }

  ngOnInit(){
    this.topicoService.getTopicoById(this.topicoId).subscribe((topico: Topico) => {
      this.formGroup.patchValue({
        nome: topico.secaoMateriasNome
      });
    });
  }
}
