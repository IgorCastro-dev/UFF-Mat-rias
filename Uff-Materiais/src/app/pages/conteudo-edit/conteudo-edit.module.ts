import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConteudoEditRoutingModule } from './conteudo-edit-routing.module';
import { ConteudoEditComponent } from './conteudo-edit/conteudo-edit.component';
import { NavBarComponent } from 'src/app/shared/components/nav-bar/nav-bar/nav-bar.component';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    ConteudoEditComponent
  ],
  imports: [
    CommonModule,
    ConteudoEditRoutingModule,
    NavBarModule,
    LogoModule,
    FooterModule,
    ButtonModule,
    MaterialModule
  ]
})
export class ConteudoEditModule { }
