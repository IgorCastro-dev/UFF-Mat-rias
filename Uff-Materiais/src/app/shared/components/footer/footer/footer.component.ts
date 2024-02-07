import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private location: Location,private router:Router) {}

  goBack() {
    this.location.back();
  }

  goMateria(){
    this.router.navigate(['/materias-edit']);
  }
}
