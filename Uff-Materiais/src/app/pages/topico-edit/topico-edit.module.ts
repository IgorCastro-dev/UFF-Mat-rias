import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicoEditRoutingModule } from './topico-edit-routing.module';
import { TopicoEditComponent } from './topico-edit/topico-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { ListaTopicosEditModule } from 'src/app/shared/components/lista-topicos-edit/lista-topicos-edit.module';


@NgModule({
  declarations: [
    TopicoEditComponent
  ],
  imports: [
    CommonModule,
    TopicoEditRoutingModule,
    MaterialModule,
    LogoModule,
    FooterModule,
    NavBarModule,
    ListaTopicosEditModule
  ]
})
export class TopicoEditModule { }
