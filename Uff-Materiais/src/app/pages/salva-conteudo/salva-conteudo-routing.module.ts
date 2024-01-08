import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaConteudoComponent } from './salva-conteudo/salva-conteudo.component';

const routes: Routes = [
  {path:"",component:SalvaConteudoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalvaConteudoRoutingModule { }
