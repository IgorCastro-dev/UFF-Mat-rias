import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaMateriaComponent } from './atualiza-materia.component';

describe('AtualizaMateriaComponent', () => {
  let component: AtualizaMateriaComponent;
  let fixture: ComponentFixture<AtualizaMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizaMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
