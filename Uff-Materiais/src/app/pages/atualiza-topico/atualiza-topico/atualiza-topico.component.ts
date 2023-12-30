import { Component } from '@angular/core';

@Component({
  selector: 'app-atualiza-topico',
  templateUrl: './atualiza-topico.component.html',
  styleUrl: './atualiza-topico.component.scss'
})
export class AtualizaTopicoComponent {
  nomeBotao = "atualizar";
  materiaId: number = 3;
}
