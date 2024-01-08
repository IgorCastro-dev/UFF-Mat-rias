import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvaConteudoComponent } from './salva-conteudo.component';

describe('SalvaConteudoComponent', () => {
  let component: SalvaConteudoComponent;
  let fixture: ComponentFixture<SalvaConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvaConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
