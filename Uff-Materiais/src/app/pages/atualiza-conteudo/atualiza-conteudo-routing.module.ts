import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaConteudoComponent } from './atualiza-conteudo/atualiza-conteudo.component';

const routes: Routes = [
  {path:"", component:AtualizaConteudoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizaConteudoRoutingModule { }
