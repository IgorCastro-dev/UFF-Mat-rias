import { TopicoService } from './../../../services/topico/topico.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { Topico } from 'src/app/model/topico';

@Component({
  selector: 'app-topico-edit',
  templateUrl: './topico-edit.component.html',
  styleUrl: './topico-edit.component.scss'
})

export class TopicoEditComponent {
  materiaId!:number;

  topicos$!: Observable<Topico[]>;
  constructor(private topicoService:TopicoService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      const materiaId = params['materiaId'];
      this.materiaId = materiaId;
      this.topicos$ = this.topicoService.getTopicosByMateria(materiaId);
    });
  }
}
