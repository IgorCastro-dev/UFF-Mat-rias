import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-verifica-email',
  templateUrl: './verifica-email.component.html',
  styleUrl: './verifica-email.component.scss'
})
export class VerificaEmailComponent {

  nomeBotao = "Enviar Código";
  emailFormControl  = new FormControl('', [Validators.required, Validators.email]);
  formGroup: FormGroup;

  constructor(private usuarioService: UsuarioService,private route: ActivatedRoute,private router: Router,private fb: FormBuilder){

    this.formGroup = this.fb.group({
      email: ['exemplo@id.uff.com', [Validators.required, Validators.email]]
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
    this.usuarioService.verifyEmail(email).subscribe({
      next: () => {
        console.log('Email enviado com sucesso!');
        this.router.navigate(['confirma-recoverycode'], { queryParams: { email: email.email } });
      },
      error: (error) => {
        console.error('Erro ao enviar email:', error);
        // Trate o erro conforme necessário
      }
    });
  }
}
