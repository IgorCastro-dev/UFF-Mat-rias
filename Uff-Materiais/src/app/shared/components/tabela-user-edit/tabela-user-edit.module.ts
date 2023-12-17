import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaUserEditComponent } from './tabela-user-edit/tabela-user-edit.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    TabelaUserEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    TabelaUserEditComponent
  ]
})
export class TabelaUserEditModule { }
