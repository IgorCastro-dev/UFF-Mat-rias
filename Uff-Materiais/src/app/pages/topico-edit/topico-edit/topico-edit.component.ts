import { TopicoService } from './../../../services/topico/topico.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Topico } from 'src/app/model/topico';

@Component({
  selector: 'app-topico-edit',
  templateUrl: './topico-edit.component.html',
  styleUrl: './topico-edit.component.scss'
})

export class TopicoEditComponent {


  topicos:Observable<Topico[]>;
  constructor(private topicoService:TopicoService){
    this.topicos = this.topicoService.getTopicos();
  }
}
