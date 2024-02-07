import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  usuario = localStorage.getItem("usuario");
  email = localStorage.getItem("email");

  constructor(private location: Location,private router:Router,private cookieService:CookieService) {}

  goBack() {
    this.location.back();
  }

  goMateria(){
    this.router.navigate(['/materias-edit']);
  }

  logout(){
    localStorage.clear();
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }
}
