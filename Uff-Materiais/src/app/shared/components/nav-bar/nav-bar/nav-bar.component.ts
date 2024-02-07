import { CookieService } from 'ngx-cookie-service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  usuario = localStorage.getItem("usuario");
  email = localStorage.getItem("email");

  constructor(private location: Location,private router: Router,private cookieService:CookieService) {}

  goBack(): void {
    this.location.back();
  }

  goMaterias(){
    this.router.navigate(['/materias-edit']);
  }

  logout(){
    localStorage.clear();
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }
}
