import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePasswordRoutingModule } from './update-password-routing.module';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    UpdatePasswordRoutingModule,
    MaterialModule,
    MatSelectModule,
    LogoModule,
    ButtonModule,
    NavBarModule,
    FooterModule
  ]
})
export class UpdatePasswordModule { }
