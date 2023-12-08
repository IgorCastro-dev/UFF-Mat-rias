import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaLogadaInicialComponent } from './area-logada-inicial.component';

describe('AreaLogadaInicialComponent', () => {
  let component: AreaLogadaInicialComponent;
  let fixture: ComponentFixture<AreaLogadaInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaLogadaInicialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaLogadaInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
