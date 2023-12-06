import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecuperaSenhaRoutingModule } from './recupera-senha-routing.module';
import { ButtonComponent } from '../../shared/components/button/button/button.component';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RecuperaSenhaRoutingModule
  ]
})
export class RecuperaSenhaModule { }
