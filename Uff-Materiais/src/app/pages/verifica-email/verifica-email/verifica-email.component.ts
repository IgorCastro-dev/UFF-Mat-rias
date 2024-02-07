import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog/error-dialog.component';

@Component({
  selector: 'app-verifica-email',
  templateUrl: './verifica-email.component.html',
  styleUrl: './verifica-email.component.scss'
})
export class VerificaEmailComponent {

  nomeBotao = "Enviar Código";
  emailFormControl  = new FormControl('', [Validators.required, Validators.email]);
  formGroup: FormGroup;
  showSpinner$ = new BehaviorSubject<boolean>(false);

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private location:Location){

    this.formGroup = this.fb.group({
      email: ['exemplo@id.uff.br', [Validators.required, Validators.email]]
    });
  }
  getErrorMessage() {
    if (this.emailFormControl .hasError('required')) {
      return 'You must enter a value';
    }
    return this.emailFormControl .hasError('email') ? 'Not a valid email' : '';
  }
  enviaCodigo(){
    const email = this.formGroup.value;
    this.showSpinner$.next(true);
    this.usuarioService.verifyEmail(email).subscribe({
      next: () => {
        this.showSpinner$.next(false);
        this.router.navigate(['confirma-recoverycode'], { queryParams: { email: email.email } });
      },
      error: (error) => {
        this.showSpinner$.next(false);
        this.openError('Erro ao enviar email: '+error.error.detail);
      }
    });
  }

  openError(errorMsg:string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  goBack() {
    this.location.back();
  }
}
