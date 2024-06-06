import { Component } from '@angular/core';

@Component({
  selector: 'app-area-logada-inicial',
  templateUrl: './area-logada-inicial.component.html',
  styleUrl: './area-logada-inicial.component.scss'
})
export class AreaLogadaInicialComponent {
  nomeBotao1 = "editar usuários";
  nomeBotao2 = "editar matéria";
  color = "accent";
  nome = localStorage.getItem("usuario");
}
