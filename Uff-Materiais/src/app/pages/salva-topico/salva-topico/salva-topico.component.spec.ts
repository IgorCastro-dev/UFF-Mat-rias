import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaTopicoComponent } from './salva-topico.component';

describe('SalvaTopicoComponent', () => {
  let component: SalvaTopicoComponent;
  let fixture: ComponentFixture<SalvaTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvaTopicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvaTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
