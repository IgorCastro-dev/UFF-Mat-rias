import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaMateriaComponent } from './atualiza-materia/atualiza-materia.component';

const routes: Routes = [{ path: '', component: AtualizaMateriaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtualizaMateriaRoutingModule { }
