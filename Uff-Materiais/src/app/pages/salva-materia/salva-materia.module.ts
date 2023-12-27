import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalvaMateriaRoutingModule } from './salva-materia-routing.module';
import { SalvaMateriaComponent } from './salva-materia/salva-materia.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';


@NgModule({
  declarations: [
    SalvaMateriaComponent
  ],
  imports: [
    CommonModule,
    SalvaMateriaRoutingModule,
    MaterialModule,
    NavBarModule,
    FooterModule,
    ButtonModule,
    LogoModule
  ]
})
export class SalvaMateriaModule { }
