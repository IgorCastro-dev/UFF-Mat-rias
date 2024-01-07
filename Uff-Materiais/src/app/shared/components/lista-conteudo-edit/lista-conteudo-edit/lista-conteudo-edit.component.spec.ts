import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConteudoEditComponent } from './lista-conteudo-edit.component';

describe('ListaConteudoEditComponent', () => {
  let component: ListaConteudoEditComponent;
  let fixture: ComponentFixture<ListaConteudoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaConteudoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaConteudoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
