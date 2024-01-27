import { ButtonModule } from './../../shared/components/button/button.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaTopicoRoutingModule } from './atualiza-topico-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { AtualizaTopicoComponent } from './atualiza-topico/atualiza-topico.component';
import { ErrorDialogModule } from 'src/app/shared/components/error-dialog/error-dialog.module';


@NgModule({
  declarations: [
    AtualizaTopicoComponent
  ],
  imports: [
    CommonModule,
    AtualizaTopicoRoutingModule,
    MaterialModule,
    NavBarModule,
    FooterModule,
    LogoModule,
    ButtonModule,
    ErrorDialogModule
  ]
})
export class AtualizaTopicoModule { }
