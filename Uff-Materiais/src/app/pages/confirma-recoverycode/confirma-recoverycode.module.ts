import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmaRecoverycodeRoutingModule } from './confirma-recoverycode-routing.module';
import { ConfirmaRecoverycodeComponent } from './confirma-recoverycode/confirma-recoverycode.component';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';


@NgModule({
  declarations: [
    ConfirmaRecoverycodeComponent
  ],
  imports: [
    CommonModule,
    ConfirmaRecoverycodeRoutingModule,
    NavBarModule,
    LogoModule,
    MaterialModule,
    FooterModule,
    ButtonModule
  ]
})
export class ConfirmaRecoverycodeModule { }
