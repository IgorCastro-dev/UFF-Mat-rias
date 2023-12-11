import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { MaterialModule } from '../../material/material.module';



@NgModule({
  declarations: [
    PesquisaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PesquisaComponent
  ]
})
export class PesquisaModule { }
