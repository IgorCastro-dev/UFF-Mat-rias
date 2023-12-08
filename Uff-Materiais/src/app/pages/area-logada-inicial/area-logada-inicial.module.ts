import { AreaLogadaInicialComponent } from './area-logada-inicial/area-logada-inicial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from './../../shared/components/logo/logo.module';
import { AreaLogadaInicialRoutingModule } from './area-logada-inicial-routing.module';
import { MaterialModule } from '../../shared/material/material.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';


@NgModule({
  declarations: [
    AreaLogadaInicialComponent
  ],
  imports: [
    CommonModule,
    AreaLogadaInicialRoutingModule,
    LogoModule,
    MaterialModule,
    ButtonModule,
    FooterModule,
    NavBarModule
  ]
})
export class AreaLogadaInicialModule { }
