import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaMateriasEditComponent } from './lista-materias-edit/lista-materias-edit.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    ListaMateriasEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListaMateriasEditComponent
  ]
})
export class ListaMateriasEditModule { }
