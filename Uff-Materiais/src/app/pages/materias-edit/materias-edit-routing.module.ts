import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasEditComponent } from './materias-edit/materias-edit.component';

const routes: Routes = [
  { path: '', component: MateriasEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasEditRoutingModule { }
