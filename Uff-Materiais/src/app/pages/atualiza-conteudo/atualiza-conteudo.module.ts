import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaConteudoRoutingModule } from './atualiza-conteudo-routing.module';
import { AtualizaConteudoComponent } from './atualiza-conteudo/atualiza-conteudo.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';


@NgModule({
  declarations: [
    AtualizaConteudoComponent
  ],
  imports: [
    CommonModule,
    AtualizaConteudoRoutingModule,
    MaterialModule,
    NavBarModule,
    FooterModule,
    LogoModule,
    ButtonModule
  ]
})
export class AtualizaConteudoModule { }
