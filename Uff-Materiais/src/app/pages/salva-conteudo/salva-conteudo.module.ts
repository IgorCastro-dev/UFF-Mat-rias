import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvaConteudoRoutingModule } from './salva-conteudo-routing.module';
import { SalvaConteudoComponent } from './salva-conteudo/salva-conteudo.component';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ErrorDialogModule } from 'src/app/shared/components/error-dialog/error-dialog.module';


@NgModule({
  declarations: [
    SalvaConteudoComponent
  ],
  imports: [
    CommonModule,
    SalvaConteudoRoutingModule,
    NavBarModule,
    FooterModule,
    LogoModule,
    MaterialModule,
    ButtonModule,
    ErrorDialogModule
  ]
})
export class SalvaConteudoModule { }
