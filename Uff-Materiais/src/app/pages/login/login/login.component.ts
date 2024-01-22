import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nomeBotao = "entrar";
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', Validators.required);
  hide = true;
  constructor(private router: Router,private authService:AuthService,private cookieService:CookieService){}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  logar() {
  const email = this.email.value as string;
  const password = this.password.value as string;

  this.authService.login(email, password).subscribe({
    next: (response) => {
      if (response) {
        const expirationTime = response.keyCreationTime + 300000;
        this.cookieService.set("token",response.key,expirationTime,"/");
        if(this.authService.isAdmin()){
          this.router.navigate(['area-logada-inicial']);
        }else{
          this.router.navigate(['materias-edit']);
        }
      } else {
        console.error('Erro de autenticação: Token não disponível na resposta.');
      }
    },
    error: (error) => {
      // Trate erros de autenticação aqui
      console.error('Erro de autenticação:', error);
    }
  });
}
}
