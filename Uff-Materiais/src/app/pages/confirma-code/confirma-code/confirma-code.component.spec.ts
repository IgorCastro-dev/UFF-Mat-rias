import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaCodeComponent } from './confirma-code.component';

describe('ConfirmaCodeComponent', () => {
  let component: ConfirmaCodeComponent;
  let fixture: ComponentFixture<ConfirmaCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmaCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmaCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
