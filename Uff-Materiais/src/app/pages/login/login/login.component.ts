import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  nomeBotao = "entrar";
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor(private router: Router){}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  logar(){
    this.router.navigate(['area-logada-inicial']);
  }
}
