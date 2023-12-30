import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaTopicoComponent } from './atualiza-topico.component';

describe('AtualizaTopicoComponent', () => {
  let component: AtualizaTopicoComponent;
  let fixture: ComponentFixture<AtualizaTopicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizaTopicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizaTopicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
