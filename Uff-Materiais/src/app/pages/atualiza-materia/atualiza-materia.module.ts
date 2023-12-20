import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaMateriaRoutingModule } from './atualiza-materia-routing.module';
import { AtualizaMateriaComponent } from './atualiza-materia/atualiza-materia.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';


@NgModule({
  declarations: [
    AtualizaMateriaComponent
  ],
  imports: [
    CommonModule,
    AtualizaMateriaRoutingModule,
    MaterialModule,
    NavBarModule,
    FooterModule,
    ButtonModule,
    LogoModule
  ]
})
export class AtualizaMateriaModule { }
