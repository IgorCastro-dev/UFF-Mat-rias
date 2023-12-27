import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaMateriaComponent } from './salva-materia.component';

describe('SalvaMateriaComponent', () => {
  let component: SalvaMateriaComponent;
  let fixture: ComponentFixture<SalvaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvaMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
