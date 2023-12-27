import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaMateriaComponent } from './salva-materia/salva-materia.component';

const routes: Routes = [{ path: '', component: SalvaMateriaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalvaMateriaRoutingModule { }
