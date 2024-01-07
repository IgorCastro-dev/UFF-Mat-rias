import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaConteudoEditComponent } from './lista-conteudo-edit/lista-conteudo-edit.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    ListaConteudoEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ListaConteudoEditComponent
  ]
})
export class ListaConteudoEditModule { }
