import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmaRecoverycodeComponent } from './confirma-recoverycode/confirma-recoverycode.component';

const routes: Routes = [
  {path:"",component:ConfirmaRecoverycodeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmaRecoverycodeRoutingModule { }
