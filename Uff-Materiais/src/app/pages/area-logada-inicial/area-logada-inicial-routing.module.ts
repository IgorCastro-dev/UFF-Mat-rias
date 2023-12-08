import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadaInicialComponent } from './area-logada-inicial/area-logada-inicial.component';

const routes: Routes = [
  { path: '', component: AreaLogadaInicialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaLogadaInicialRoutingModule {

 }
