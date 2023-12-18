import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioEditRoutingModule } from './usuario-edit-routing.module';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { PesquisaModule } from 'src/app/shared/components/pesquisa/pesquisa.module';
import { PaginationModule } from 'src/app/shared/components/pagination/pagination.module';
import { TabelaUserEditModule } from 'src/app/shared/components/tabela-user-edit/tabela-user-edit.module';


@NgModule({
  declarations: [
    UsuarioEditComponent
  ],
  imports: [
    CommonModule,
    UsuarioEditRoutingModule,
    MaterialModule,
    LogoModule,
    NavBarModule,
    FooterModule,
    PesquisaModule,
    PaginationModule,
    TabelaUserEditModule
  ]
})
export class UsuarioEditModule { }
