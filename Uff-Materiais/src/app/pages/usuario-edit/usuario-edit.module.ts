import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioEditRoutingModule } from './usuario-edit-routing.module';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { TabelaUserEditModule } from 'src/app/shared/components/tabela-user-edit/tabela-user-edit.module';
import { ErrorDialogModule } from 'src/app/shared/components/error-dialog/error-dialog.module';


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
    TabelaUserEditModule,
    ErrorDialogModule
  ]
})
export class UsuarioEditModule { }
