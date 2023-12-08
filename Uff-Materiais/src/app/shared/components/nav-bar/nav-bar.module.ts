import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from '../../material/material.module';
import { LogoModule } from '../logo/logo.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LogoModule
  ],
  exports:[
    NavBarComponent
  ]
})
export class NavBarModule { }
