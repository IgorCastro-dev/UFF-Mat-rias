import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaConteudoComponent } from './atualiza-conteudo.component';

describe('AtualizaConteudoComponent', () => {
  let component: AtualizaConteudoComponent;
  let fixture: ComponentFixture<AtualizaConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizaConteudoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
