import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoEditComponent } from './conteudo-edit.component';

describe('ConteudoEditComponent', () => {
  let component: ConteudoEditComponent;
  let fixture: ComponentFixture<ConteudoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConteudoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConteudoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
