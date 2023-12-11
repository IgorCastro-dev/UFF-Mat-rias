import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

const routes: Routes = [
  { path: '', component: UsuarioEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioEditRoutingModule { }
