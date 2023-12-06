import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from '../../shared/components/button/button.module';
import { MaterialModule } from '../../shared/material/material.module';
import { LogoModule } from '../../shared/components/logo/logo.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    LogoModule
  ]
})
export class LoginModule { }
