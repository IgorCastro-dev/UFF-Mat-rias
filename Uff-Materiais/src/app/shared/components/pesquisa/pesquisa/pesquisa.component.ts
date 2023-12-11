import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrl: './pesquisa.component.scss'
})
export class PesquisaComponent {
  @Input() exemplo: string = "Ex. Qualidade e Teste";
  @Input() label: string = "Matérias";
}
