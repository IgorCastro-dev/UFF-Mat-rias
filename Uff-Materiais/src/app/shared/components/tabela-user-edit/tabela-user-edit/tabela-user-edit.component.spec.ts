import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaUserEditComponent } from './tabela-user-edit.component';

describe('TabelaUserEditComponent', () => {
  let component: TabelaUserEditComponent;
  let fixture: ComponentFixture<TabelaUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaUserEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
