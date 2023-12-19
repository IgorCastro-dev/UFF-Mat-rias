import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtualizaUsuarioRoutingModule } from './atualiza-usuario-routing.module';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LogoModule } from 'src/app/shared/components/logo/logo.module';
import { ButtonModule } from 'src/app/shared/components/button/button.module';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { NavBarModule } from 'src/app/shared/components/nav-bar/nav-bar.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';

@NgModule({
  declarations: [
    AtualizaUsuarioComponent
  ],
  imports: [
    CommonModule,
    AtualizaUsuarioRoutingModule,
    MaterialModule,
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
export class AtualizaUsuarioModule { }
