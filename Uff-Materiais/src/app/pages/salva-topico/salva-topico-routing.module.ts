import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalvaTopicoComponent } from './salva-topico/salva-topico.component';

const routes: Routes = [
  {path:"",component:SalvaTopicoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalvaTopicoRoutingModule { }
