import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasEditRoutingModule } from './materias-edit-routing.module';
import { MateriasEditComponent } from './materias-edit/materias-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ListaMateriasEditModule } from 'src/app/shared/components/lista-materias-edit/lista-materias-edit.module';


@NgModule({
  declarations: [
    MateriasEditComponent
  ],
  imports: [
    CommonModule,
    MateriasEditRoutingModule,
    MaterialModule,
    NavBarModule,
    LogoModule,
    FooterModule,
    ListaMateriasEditModule
  ]
})
export class MateriasEditModule { }
