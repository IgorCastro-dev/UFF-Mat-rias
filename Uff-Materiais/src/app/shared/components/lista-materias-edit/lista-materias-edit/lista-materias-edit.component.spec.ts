import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMateriasEditComponent } from './lista-materias-edit.component';

describe('ListaMateriasEditComponent', () => {
  let component: ListaMateriasEditComponent;
  let fixture: ComponentFixture<ListaMateriasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaMateriasEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaMateriasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
