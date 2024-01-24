import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaRecoverycodeComponent } from './confirma-recoverycode.component';

describe('ConfirmaRecoverycodeComponent', () => {
  let component: ConfirmaRecoverycodeComponent;
  let fixture: ComponentFixture<ConfirmaRecoverycodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmaRecoverycodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmaRecoverycodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
