import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConteudoEditComponent } from './conteudo-edit/conteudo-edit.component';

const routes: Routes = [
  { path: '', component: ConteudoEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConteudoEditRoutingModule { }
