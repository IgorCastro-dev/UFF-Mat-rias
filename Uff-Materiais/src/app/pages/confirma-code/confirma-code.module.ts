import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmaCodeRoutingModule } from './confirma-code-routing.module';
import { ConfirmaCodeComponent } from './confirma-code/confirma-code.component';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { ErrorDialogModule } from 'src/app/shared/components/error-dialog/error-dialog.module';
import { SuccessDialogModule } from 'src/app/shared/components/success-dialog/success-dialog.module';


@NgModule({
  declarations: [
    ConfirmaCodeComponent
  ],
  imports: [
    CommonModule,
    ConfirmaCodeRoutingModule,
    NavBarModule,
    LogoModule,
    MaterialModule,
    FooterModule,
    ButtonModule,
    ErrorDialogModule,
    SuccessDialogModule
  ]
})
export class ConfirmaCodeModule { }
