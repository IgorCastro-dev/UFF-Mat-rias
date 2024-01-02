import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvaTopicoRoutingModule } from './salva-topico-routing.module';
import { SalvaTopicoComponent } from './salva-topico/salva-topico.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    SalvaTopicoComponent
  ],
  imports: [
    CommonModule,
    SalvaTopicoRoutingModule,
    MaterialModule,
    NavBarModule,
    LogoModule,
    ButtonModule,
    FooterModule
  ]
})
export class SalvaTopicoModule { }
