import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';



@NgModule({
  declarations: [
    SuccessDialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SuccessDialogComponent
  ]
})
export class SuccessDialogModule { }
