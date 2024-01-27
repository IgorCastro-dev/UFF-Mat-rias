import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private location: Location,private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  goMaterias(){
    this.router.navigate(['/materias-edit']);
  }

  goLogin(){
    this.router.navigate(['/login']);
  }
}
