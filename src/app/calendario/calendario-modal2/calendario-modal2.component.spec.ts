import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioModal2Component } from './calendario-modal2.component';

describe('CalendarioModal2Component', () => {
  let component: CalendarioModal2Component;
  let fixture: ComponentFixture<CalendarioModal2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarioModal2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarioModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
