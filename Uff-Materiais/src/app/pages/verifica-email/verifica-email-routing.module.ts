import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificaEmailComponent } from './verifica-email/verifica-email.component';

const routes: Routes = [
  {path:"",component:VerificaEmailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificaEmailRoutingModule { }
