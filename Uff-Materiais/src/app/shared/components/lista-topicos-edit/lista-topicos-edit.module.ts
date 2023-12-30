import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTopicosEditComponent } from './lista-topicos-edit/lista-topicos-edit.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    ListaTopicosEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListaTopicosEditComponent
  ]
})
export class ListaTopicosEditModule { }
