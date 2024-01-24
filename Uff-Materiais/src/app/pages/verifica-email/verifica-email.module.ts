import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificaEmailRoutingModule } from './verifica-email-routing.module';
import { VerificaEmailComponent } from './verifica-email/verifica-email.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { NgxMaskDirective } from 'ngx-mask';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    VerificaEmailComponent
  ],
  imports: [
    CommonModule,
    VerificaEmailRoutingModule,
    MaterialModule,
    MatSelectModule,
    LogoModule,
    ButtonModule,
    NgxMaskDirective,
    NavBarModule,
    FooterModule
  ]
})
export class VerificaEmailModule { }
