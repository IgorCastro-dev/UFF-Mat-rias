import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastraUsuarioRoutingModule } from './cadastra-usuario-routing.module';
import { CadastraUsuarioComponent } from './cadastra-usuario/cadastra-usuario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';


@NgModule({
  declarations: [
    CadastraUsuarioComponent
  ],
  imports: [
    CommonModule,
    CadastraUsuarioRoutingModule,
    MaterialModule,
    MatSelectModule,
    LogoModule,
    ButtonModule,
    NgxMaskDirective,
    NavBarModule,
    FooterModule
  ],
  providers: [
    provideNgxMask()
]
})
export class CadastraUsuarioModule { }
