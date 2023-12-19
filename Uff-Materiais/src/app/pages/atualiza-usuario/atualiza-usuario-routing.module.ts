import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';

const routes: Routes = [
  { path: '', component: AtualizaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizaUsuarioRoutingModule { }
