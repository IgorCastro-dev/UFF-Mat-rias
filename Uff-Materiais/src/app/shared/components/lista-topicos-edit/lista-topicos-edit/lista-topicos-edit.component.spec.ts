import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTopicosEditComponent } from './lista-topicos-edit.component';

describe('ListaTopicosEditComponent', () => {
  let component: ListaTopicosEditComponent;
  let fixture: ComponentFixture<ListaTopicosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaTopicosEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaTopicosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
