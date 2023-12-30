import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicoEditComponent } from './topico-edit.component';

describe('TopicoEditComponent', () => {
  let component: TopicoEditComponent;
  let fixture: ComponentFixture<TopicoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
