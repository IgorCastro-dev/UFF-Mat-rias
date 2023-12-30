import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaTopicoComponent } from './atualiza-topico/atualiza-topico.component';

const routes: Routes = [
  {path:"", component:AtualizaTopicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizaTopicoRoutingModule { }
