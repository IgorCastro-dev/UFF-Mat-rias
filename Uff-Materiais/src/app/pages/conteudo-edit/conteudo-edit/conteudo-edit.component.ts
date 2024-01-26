import { Conteudo } from 'src/app/model/conteudo';
import { ConteudoService } from './../../../services/conteudo/conteudo.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, delay } from 'rxjs';

@Component({
  selector: 'app-conteudo-edit',
  templateUrl: './conteudo-edit.component.html',
  styleUrl: './conteudo-edit.component.scss'
})
export class ConteudoEditComponent {
  topicoId!:number;
  conteudos$!: Observable<Conteudo[]>;
  constructor(private conteudoService:ConteudoService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      const topicoId = params['topico-id'];
      this.topicoId = topicoId;
      this.conteudos$ = this.conteudoService.getConteudos(topicoId);
    })
  }
}
